// This file is deprecated. Use ./slices/navbarSlice.js instead.
// Keeping this file for backward compatibility only.

import navbarReducer, { fetchNavbarData, clearNavbarError, setNavbarData } from './slices/navbarSlice';

// Re-export everything from the new navbarSlice for backward compatibility
export { fetchNavbarData, clearNavbarError, setNavbarData };
export default navbarReducer;
