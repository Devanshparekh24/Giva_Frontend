import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../BASE_URL';

// Async thunk for fetching navbar data
export const fetchNavbarData = createAsyncThunk(
  'navbar/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/navbar/navbarData`);
      if (!response.ok) {
        throw new Error('Failed to fetch navbar data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Navbar slice
const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    clearNavbarError: (state) => {
      state.error = null;
    },
    setNavbarData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  },
});

export const { clearNavbarError, setNavbarData } = navbarSlice.actions;
export default navbarSlice.reducer;
