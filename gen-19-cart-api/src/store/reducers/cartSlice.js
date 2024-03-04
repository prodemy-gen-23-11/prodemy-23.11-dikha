import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../data/axios";
import { DECREMENT, FAILED, IDLE, INCREMENT, LOADING, SUCCESSFULL } from "../../data/library";


const initialState = {
    dataCart: [],
    status: IDLE,
    error: null
};

// function isExistId(arrayDataCart, id) {
//     for (const obj of arrayDataCart) {
//         if (obj.id == id) {
//             return true;
//         }
//     }
//     return false;
// }

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


export const getDataCartFromApi = createAsyncThunk('/getAllCart',
    async (thunkAPI) => {
        try {
            const response = await axiosInstance.get("/cart")
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
)

export const removeBarangById = createAsyncThunk('/deleteBarangById',
    async (id) => {
        try {
            await axiosInstance.delete(`/cart/${id}`)
            const response = await axiosInstance.get("/cart")
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: err.message })
        }
    }
)

export const setQuantityBarang = createAsyncThunk('/setQuantity',
    async (data) => {
        const sendData = changeQuantityBarang(data);
        const id = sendData.id;
        try {
            await axiosInstance.put(`/cart/${id}`, sendData)
            const response = await axiosInstance.get("/cart")
            return response.data;
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
                state.dataCart = setBarangViaApi([...state.dataCart], action.payload);
                state.status = IDLE;
            })
            .addCase(getDataCartFromApi.rejected, (state, action) => {
                state.status = FAILED;
                state.error = action.error.message;
            })
            .addCase(removeBarangById.fulfilled, (state, action) => {
                state.dataCart = action.payload;
            })
            .addCase(setQuantityBarang.fulfilled, (state, action) => {
                state.dataCart = action.payload;
            })
    }
})

export const { removeBarangFromCart, editQuantityBarangFromCart } = cartSlice.actions;

export default cartSlice.reducer;