# Redux Folder Structure

This document explains the proper Redux folder structure implemented in the Giva Frontend project.

## 📁 Folder Structure

```
src/redux/
├── actions/
│   ├── actionTypes.js      # All action type constants
│   ├── navbarActions.js    # Navbar-specific action creators
│   └── index.js           # Exports all actions
├── slices/
│   └── exampleSlice.js    # Example Redux Toolkit slice
├── store.js               # Redux store configuration
├── reducers.js            # Root reducer (combines all reducers)
├── navbarReducer.js       # Navbar-specific reducer
├── index.js               # Main exports for easy importing
└── README.md              # This file
```

## 🔧 File Descriptions

### `actions/actionTypes.js`
Contains all action type constants organized by feature/domain. This helps prevent typos and makes refactoring easier.

```javascript
export const NAVBAR_ACTIONS = {
  FETCH_NAVBAR_DATA_REQUEST: 'FETCH_NAVBAR_DATA_REQUEST',
  FETCH_NAVBAR_DATA_SUCCESS: 'FETCH_NAVBAR_DATA_SUCCESS',
  FETCH_NAVBAR_DATA_FAILURE: 'FETCH_NAVBAR_DATA_FAILURE',
};
```

### `actions/navbarActions.js`
Contains action creators and async actions (thunks) for the navbar feature.

```javascript
export const fetchNavbarData = () => {
  return async (dispatch) => {
    dispatch(fetchNavbarDataRequest());
    try {
      const response = await axios.get(`${BASE_URL}/navbar/navbarData`);
      dispatch(fetchNavbarDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchNavbarDataFailure(error.message));
    }
  };
};
```

### `navbarReducer.js`
Contains the reducer logic for navbar state management.

```javascript
const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_ACTIONS.FETCH_NAVBAR_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    // ... other cases
  }
};
```

### `reducers.js`
Combines all reducers into a root reducer.

```javascript
const rootReducer = combineReducers({
  navbar: navbarReducer,
  // Add other reducers here
});
```

### `store.js`
Configures and creates the Redux store.

```javascript
const store = createStore(rootReducer, applyMiddleware(thunk));
```

### `index.js`
Main export file for easy importing in components.

```javascript
export { default as store } from './store';
export * from './actions';
// ... other exports
```

## 🚀 Usage in Components

### Basic Usage
```javascript
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNavbarData } from '../redux';

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbarData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* Render navbar data */}</div>;
};
```

### Alternative Import (using index file)
```javascript
import { useAppSelector, useAppDispatch, fetchNavbarData } from '../redux';

const MyComponent = () => {
  const dispatch = useAppDispatch();
  const navbarData = useAppSelector(state => state.navbar);

  // ... component logic
};
```

## 🛠 Adding New Features

### 1. Add Action Types
Add new action types to `actions/actionTypes.js`:
```javascript
export const PRODUCT_ACTIONS = {
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
};
```

### 2. Create Action Creators
Create `actions/productActions.js`:
```javascript
import { PRODUCT_ACTIONS } from './actionTypes';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_ACTIONS.FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get('/api/products');
      dispatch({
        type: PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILURE,
        payload: error.message
      });
    }
  };
};
```

### 3. Create Reducer
Create `productReducer.js`:
```javascript
import { PRODUCT_ACTIONS } from './actions/actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
```

### 4. Update Root Reducer
Add to `reducers.js`:
```javascript
import productReducer from './productReducer';

const rootReducer = combineReducers({
  navbar: navbarReducer,
  products: productReducer, // Add this line
});
```

### 5. Update Exports
Add to `actions/index.js`:
```javascript
export * from './productActions';
```

## 🔄 Migration to Redux Toolkit (Recommended)

For new projects or when refactoring, consider using Redux Toolkit:

1. Install: `npm install @reduxjs/toolkit`
2. Use `createSlice` for reducers and actions
3. Use `configureStore` instead of `createStore`
4. Use `createAsyncThunk` for async actions

Example slice in `slices/` folder:
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNavbarData = createAsyncThunk(
  'navbar/fetchData',
  async () => {
    const response = await axios.get(`${BASE_URL}/navbar/navbarData`);
    return response.data;
  }
);

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    // synchronous reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default navbarSlice.reducer;
```

## 📋 Best Practices

1. **Keep actions and reducers separate** - Each feature should have its own action creators and reducer
2. **Use action type constants** - Avoid hardcoded strings in reducers
3. **Organize by feature/domain** - Group related actions, reducers, and selectors together
4. **Use meaningful action names** - Make actions self-documenting
5. **Handle loading and error states** - Always include loading and error handling
6. **Keep reducers pure** - Don't mutate state directly, return new state objects
7. **Use selector functions** - Extract complex state selections into reusable selectors

## 🔗 Useful Links

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Best Practices](https://redux.js.org/style-guide/style-guide)
