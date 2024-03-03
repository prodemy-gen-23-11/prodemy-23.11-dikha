import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../data/axios";
import { DECREMENT, FAILED, IDLE, INCREMENT, LOADING, SUCCESSFULL } from "../../data/library";


const initialState = {
    userId: "",
    userCart: {
        dataCart: []
    },
    status: IDLE,
    error: null
};

function isExistId(arrayDataCart, id) {
    for (const obj of arrayDataCart) {
        if (obj.id == id) {
            return true;
        }
    }
    return false;
}

function changeQuantityBarang({ option, qty, stok, id, ...data }) {
    if ((option == INCREMENT) && (qty < stok)) {
        qty += 1;
    }
    if ((option == DECREMENT) && (qty > 1)) {
        qty -= 1;
    }
    return { ...data, qty: qty, stok: stok, id: id };
}

function setBarangViaApi(arrayDataCart, payload) {
    arrayDataCart = [...payload];
    return [...arrayDataCart];
}

function addBarang(dataBase, barangBaru) {
    const { dataCart } = dataBase;
    const idExist = isExistId(dataCart, barangBaru.id)
    if (!idExist) {
        dataCart.push(barangBaru);
        alert("Barang Berhasil Ditambah");
    }
    else {
        alert("Barang Sudah Ada Di Keranjang");
    }
    axiosInstance.put(`/cart/${dataBase.id}`, dataBase);
}


export const addBarangToCart = createAsyncThunk('/addBarangToCart',
    async (payload) => {
        const { id, barang } = payload;
        try {
            await axiosInstance.get(`/cart/${id}`);
        } catch (error) {
            if (error.response?.status == 404) {
                const newForm = {
                    id: id,
                    dataCart: []
                }
                await axiosInstance.post(`/cart`, newForm);
            }
        } finally {
            const { data } = await axiosInstance.get(`/cart/${id}`);
            const sendData = {
                dataBase: data,
                barangBaru: barang
            }
            return sendData;
        }
    }
)


export const getDataCartFromApi = createAsyncThunk('/getAllCart',
    async (userId) => {
        try {
            const response = await axiosInstance.get(`/cart/${userId}`)
            return response.data;
        } catch (error) {
            return userId.rejectWithValue({ error: err.message })
        }
    }
)

export const removeBarangById = createAsyncThunk('/deleteBarangById',
    async (data) => {
        const { userId, dataCart } = data;
        try {
            await axiosInstance.put(`/cart/${userId}`, { dataCart: dataCart })
            const response = await axiosInstance.get(`/cart/${userId}`)
            console.log(response.data?.dataCart)
            return response.data?.dataCart;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
)

export const setQuantityBarang = createAsyncThunk('/setQuantity',
    async (payload) => {
        const { userId, barang } = payload
        const newQuantity = changeQuantityBarang(barang);
        try {
            const { data } = await axiosInstance.get(`/cart/${userId}`)
            const { id, dataCart } = data;
            const newDataCart = dataCart.map(item => item.id == newQuantity.id ? { ...item, ...newQuantity } : { ...item });
            const sendData = {
                id: userId,
                dataCart: newDataCart
            }
            await axiosInstance.put(`/cart/${userId}`, sendData)
            const response = await axiosInstance.get(`/cart/${userId}`);
            return response.data?.dataCart
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
)


const cartSlice = createSlice({
    name: "cart",
    initialState: { ...initialState },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getDataCartFromApi.pending, (state, action) => {
                state.status = LOADING;
            })
            .addCase(getDataCartFromApi.fulfilled, (state, action) => {
                state.status = SUCCESSFULL;
                state.userCart.dataCart = setBarangViaApi([...state.userCart.dataCart], action.payload?.dataCart);
                state.status = IDLE;
            })
            .addCase(getDataCartFromApi.rejected, (state, action) => {
                state.status = FAILED;
                state.error = action.error.message;
            })
            .addCase(addBarangToCart.fulfilled, (state, action) => {
                const { dataBase, barangBaru } = action.payload;
                addBarang(dataBase, barangBaru);
            })
            .addCase(removeBarangById.pending, (state, action) => {
                state.status = LOADING;
            })
            .addCase(removeBarangById.fulfilled, (state, action) => {
                state.userCart.dataCart = action.payload;
                state.status = SUCCESSFULL;
            })
            .addCase(setQuantityBarang.pending, (state, action) => {
                state.status = LOADING;
            })
            .addCase(setQuantityBarang.fulfilled, (state, action) => {
                state.userCart.dataCart = action.payload;
                state.status = SUCCESSFULL;
            })
    }
})

export const { removeBarangFromCart, editQuantityBarangFromCart } = cartSlice.actions;

export default cartSlice.reducer;