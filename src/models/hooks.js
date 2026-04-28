import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

// Custom typed hooks for Redux
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

// Custom hooks for specific slices
export const useNavbar = () => {
  const dispatch = useAppDispatch();
  const navbarState = useAppSelector((state) => state.navbar);

  return {
    ...navbarState,
    dispatch,
  };
};

export const useUser = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);

  return {
    ...userState,
    dispatch,
  };
};

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);

  return {
    ...cartState,
    dispatch,
  };
};

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.products);

  return {
    ...productsState,
    dispatch,
  };
};

// Custom hooks with memoized actions
export const useNavbarActions = () => {
  const dispatch = useAppDispatch();

  const fetchNavbarData = useCallback(() => {
    dispatch({ type: 'navbar/fetchData/pending' });
  }, [dispatch]);

  const clearNavbarError = useCallback(() => {
    dispatch({ type: 'navbar/clearNavbarError' });
  }, [dispatch]);

  const setNavbarData = useCallback((data) => {
    dispatch({ type: 'navbar/setNavbarData', payload: data });
  }, [dispatch]);

  return {
    fetchNavbarData,
    clearNavbarError,
    setNavbarData,
  };
};

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const loginUser = useCallback((credentials) => {
    dispatch({ type: 'user/login/pending', payload: credentials });
  }, [dispatch]);

  const registerUser = useCallback((userData) => {
    dispatch({ type: 'user/register/pending', payload: userData });
  }, [dispatch]);

  const fetchUserProfile = useCallback(() => {
    dispatch({ type: 'user/fetchProfile/pending' });
  }, [dispatch]);

  const logoutUser = useCallback(() => {
    dispatch({ type: 'user/logout/pending' });
  }, [dispatch]);

  const clearUserError = useCallback(() => {
    dispatch({ type: 'user/clearUserError' });
  }, [dispatch]);

  const setUser = useCallback((userData) => {
    dispatch({ type: 'user/setUser', payload: userData });
  }, [dispatch]);

  const updateUserProfile = useCallback((profileData) => {
    dispatch({ type: 'user/updateUserProfile', payload: profileData });
  }, [dispatch]);

  return {
    loginUser,
    registerUser,
    fetchUserProfile,
    logoutUser,
    clearUserError,
    setUser,
    updateUserProfile,
  };
};

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({ type: 'cart/addToCart', payload: { product, quantity } });
  }, [dispatch]);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'cart/removeFromCart', payload: productId });
  }, [dispatch]);

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: 'cart/updateQuantity', payload: { productId, quantity } });
  }, [dispatch]);

  const incrementQuantity = useCallback((productId) => {
    dispatch({ type: 'cart/incrementQuantity', payload: productId });
  }, [dispatch]);

  const decrementQuantity = useCallback((productId) => {
    dispatch({ type: 'cart/decrementQuantity', payload: productId });
  }, [dispatch]);

  const clearCart = useCallback(() => {
    dispatch({ type: 'cart/clearCart' });
  }, [dispatch]);

  const setCartLoading = useCallback((loading) => {
    dispatch({ type: 'cart/setCartLoading', payload: loading });
  }, [dispatch]);

  const setCartError = useCallback((error) => {
    dispatch({ type: 'cart/setCartError', payload: error });
  }, [dispatch]);

  const clearCartError = useCallback(() => {
    dispatch({ type: 'cart/clearCartError' });
  }, [dispatch]);

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    setCartLoading,
    setCartError,
    clearCartError,
  };
};

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const fetchProducts = useCallback((params = {}) => {
    dispatch({ type: 'products/fetchProducts/pending', payload: params });
  }, [dispatch]);

  const fetchProductById = useCallback((productId) => {
    dispatch({ type: 'products/fetchProductById/pending', payload: productId });
  }, [dispatch]);

  const fetchCategories = useCallback(() => {
    dispatch({ type: 'products/fetchCategories/pending' });
  }, [dispatch]);

  const searchProducts = useCallback((searchTerm) => {
    dispatch({ type: 'products/searchProducts/pending', payload: searchTerm });
  }, [dispatch]);

  const clearProductError = useCallback(() => {
    dispatch({ type: 'products/clearProductError' });
  }, [dispatch]);

  const setCurrentProduct = useCallback((product) => {
    dispatch({ type: 'products/setCurrentProduct', payload: product });
  }, [dispatch]);

  const clearCurrentProduct = useCallback(() => {
    dispatch({ type: 'products/clearCurrentProduct' });
  }, [dispatch]);

  const setFilters = useCallback((filters) => {
    dispatch({ type: 'products/setFilters', payload: filters });
  }, [dispatch]);

  const clearFilters = useCallback(() => {
    dispatch({ type: 'products/clearFilters' });
  }, [dispatch]);

  const setLoading = useCallback((loading) => {
    dispatch({ type: 'products/setLoading', payload: loading });
  }, [dispatch]);

  return {
    fetchProducts,
    fetchProductById,
    fetchCategories,
    searchProducts,
    clearProductError,
    setCurrentProduct,
    clearCurrentProduct,
    setFilters,
    clearFilters,
    setLoading,
  };
};
