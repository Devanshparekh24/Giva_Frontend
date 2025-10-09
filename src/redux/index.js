// Main Redux exports for easy importing in components

// Store
export { default as store } from './store';

// Slices (Redux Toolkit pattern)
export { default as navbarReducer } from './slices/navbarSlice';
export { fetchNavbarData, clearNavbarError, setNavbarData } from './slices/navbarSlice';

export { default as userReducer } from './slices/userSlice';
export { loginUser, registerUser, fetchUserProfile, logoutUser, clearUserError, setUser, updateUserProfile } from './slices/userSlice';

export { default as cartReducer } from './slices/cartSlice';
export { addToCart, removeFromCart, updateQuantity, incrementQuantity, decrementQuantity, clearCart, setCartLoading, setCartError, clearCartError } from './slices/cartSlice';

export { default as productReducer } from './slices/productSlice';
export { fetchProducts, fetchProductById, fetchCategories, searchProducts, clearProductError, setCurrentProduct, clearCurrentProduct, setFilters, clearFilters, setLoading } from './slices/productSlice';

// Legacy exports (for backward compatibility)
export { default as rootReducer } from './reducers';
export { default as oldNavbarReducer } from './navbarReducer';

// Action Creators (legacy)
export * from './actions';

// Action Types (legacy)
export * from './actions/actionTypes';

// Example slice (legacy)
export { default as exampleSlice } from './slices/exampleSlice';

// Redux hooks for easy usage in components
export {
  useAppSelector,
  useAppDispatch,
  useNavbar,
  useUser,
  useCart,
  useProducts,
  useNavbarActions,
  useUserActions,
  useCartActions,
  useProductActions,
} from './hooks';

// Example of how to use in components:
/*
// Modern Redux Toolkit usage:
import { useNavbar, useNavbarActions } from '../redux';

const MyComponent = () => {
  const { data, loading, error } = useNavbar();
  const { fetchNavbarData } = useNavbarActions();

  useEffect(() => {
    fetchNavbarData();
  }, [fetchNavbarData]);

  // ... rest of component
};
*/

/*
// Cart usage example:
import { useCart, useCartActions } from '../redux';

const CartComponent = () => {
  const { items, totalQuantity, totalAmount } = useCart();
  const { addToCart, removeFromCart, updateQuantity } = useCartActions();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  // ... rest of component
};
*/

/*
// User authentication example:
import { useUser, useUserActions } from '../redux';

const AuthComponent = () => {
  const { currentUser, isAuthenticated, loading } = useUser();
  const { loginUser, logoutUser, registerUser } = useUserActions();

  const handleLogin = (email, password) => {
    loginUser({ email, password });
  };

  // ... rest of component
};
*/

/*
// Products example:
import { useProducts, useProductActions } from '../redux';

const ProductComponent = () => {
  const { products, loading, categories } = useProducts();
  const { fetchProducts, fetchCategories, searchProducts } = useProductActions();

  useEffect(() => {
    fetchProducts({ page: 1, limit: 10 });
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  // ... rest of component
};
*/
