import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY } from '../../api/api'
import axios from 'axios'

const initialState = {
  films: [],
  premieres: []
}

export const getPremieres = createAsyncThunk(
    'main/getPremieres',
    async (date) => {
      const { year, month } = date
      const resp = await axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }, 
    })
    return resp.data.items
    }

)

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPremieres: (state, action) => {
        state.films = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPremieres.fulfilled, (state, action) => {
      state.premieres = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { setPremieres } = mainSlice.actions

export default mainSlice.reducer