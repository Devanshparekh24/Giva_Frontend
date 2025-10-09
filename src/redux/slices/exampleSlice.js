// Example slice using traditional Redux pattern (currently used in project)
// To use Redux Toolkit, install it first: npm install @reduxjs/toolkit

// Example reducer using traditional Redux pattern
const initialState = {
  value: 'Hello Redux',
  loading: false,
  error: null,
};

// Action Types
const EXAMPLE_ACTIONS = {
  SET_VALUE: 'example/SET_VALUE',
  SET_LOADING: 'example/SET_LOADING',
  SET_ERROR: 'example/SET_ERROR',
  CLEAR_ERROR: 'example/CLEAR_ERROR',
};

// Action Creators
export const setValue = (value) => ({
  type: EXAMPLE_ACTIONS.SET_VALUE,
  payload: value,
});

export const setLoading = (loading) => ({
  type: EXAMPLE_ACTIONS.SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: EXAMPLE_ACTIONS.SET_ERROR,
  payload: error,
});

export const clearError = () => ({
  type: EXAMPLE_ACTIONS.CLEAR_ERROR,
});

// Async action creator (traditional Redux pattern)
export const fetchExampleData = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      // Example API call
      const response = await fetch('/api/example');
      const data = await response.json();
      dispatch(setValue(data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

// Reducer
const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case EXAMPLE_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case EXAMPLE_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case EXAMPLE_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default exampleReducer;

// Example of how Redux Toolkit would look (when you install it):
/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExampleData = createAsyncThunk(
  'example/fetchData',
  async () => {
    const response = await fetch('/api/example');
    return response.json();
  }
);

const exampleSlice = createSlice({
  name: 'example',
  initialState: { value: 'Hello Redux Toolkit', loading: false, error: null },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setValue, clearError } = exampleSlice.actions;
export default exampleSlice.reducer;
*/
