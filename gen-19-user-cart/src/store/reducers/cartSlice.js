import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../data/axios";
import { DECREMENT, FAILED, IDLE, INCREMENT, LOADING, SUCCESSFULL } from "../../data/library";


const initialState = {
    userId: "",
    userCart: [],
    status: IDLE,
    error: null
};



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

function isExistId(userCart, id) {
    for (const obj of userCart) {
        if (obj.id == id) {
            return true;
        }
    }
    return false;
}

function addBarangToUserCart(userCart, barangBaru) {
    const idExist = isExistId(userCart, barangBaru.id)
    if (!idExist) {
        userCart = [...userCart, { ...barangBaru }];
        return userCart;
    }
    else {
        throw new Error("Barang Sudah Berada di Keranjang");
    }
}

export const addBarangToCart = createAsyncThunk('/addBarangToCart',
    async (payload) => {
        const { userId, addBarang, userCart } = payload;
        try {
            const dataCart = addBarangToUserCart(userCart, addBarang);
            const sendData = {
                id: userId,
                dataCart: dataCart
            }
            await axiosInstance.put(`/cart/${sendData.id}`, sendData);
            alert("Barang berhasil Ditambahkan");
            return dataCart;
        } catch (error) {
            alert(error);
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
            const sendData = {
                id: userId,
                dataCart: dataCart
            }
            await axiosInstance.put(`/cart/${userId}`, sendData)
            return dataCart;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
)

export const setQuantityBarang = createAsyncThunk('/setQuantity',
    async (payload) => {
        const { userId, barang, userCart } = payload
        const newQuantity = changeQuantityBarang(barang);
        try {
            const newDataCart = userCart.map(item => item.id == newQuantity.id ? { ...item, ...newQuantity } : { ...item });
            const sendData = {
                id: userId,
                dataCart: newDataCart
            }
            await axiosInstance.put(`/cart/${userId}`, sendData);
            return newDataCart;
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
                const dataCart = action.payload?.dataCart;
                state.userCart = setBarangViaApi([...state.userCart], dataCart);
                state.status = IDLE;
            })
            .addCase(getDataCartFromApi.rejected, (state, action) => {
                state.status = FAILED;
                state.error = action.error.message;
            })
            .addCase(addBarangToCart.fulfilled, (state, action) => {
                state.userCart = action.payload;
            })
            .addCase(removeBarangById.pending, (state, action) => {
                state.status = LOADING;
            })
            .addCase(removeBarangById.fulfilled, (state, action) => {
                state.userCart = action.payload;
                state.status = SUCCESSFULL;
            })
            .addCase(setQuantityBarang.pending, (state, action) => {
                state.status = LOADING;
            })
            .addCase(setQuantityBarang.fulfilled, (state, action) => {
                state.userCart = action.payload;
                state.status = SUCCESSFULL;
            })
    }
})

export const { removeBarangFromCart, editQuantityBarangFromCart } = cartSlice.actions;

export default cartSlice.reducer;