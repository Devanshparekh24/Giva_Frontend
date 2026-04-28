import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarData } from "../models";
import { useUIContext } from "../context/UIContext";

export const useNavbarViewModel = () => {
  const { isLocationOpen, setIsLocationOpen, isMobileMenuOpen, toggleSidebar } = useUIContext();
  
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openSidebarSubMenu, setOpenSidebarSubMenu] = useState(null);
  const [openSidebarSubSubMenu, setOpenSidebarSubSubMenu] = useState(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbarData());
  }, [dispatch]);

  return {
    isLocationOpen,
    setIsLocationOpen,
    openDropdown,
    setOpenDropdown,
    openSubDropdown,
    setOpenSubDropdown,
    isMobileMenuOpen,
    openSidebarSubMenu,
    setOpenSidebarSubMenu,
    openSidebarSubSubMenu,
    setOpenSidebarSubSubMenu,
    loading,
    data,
    error,
    toggleSidebar
  };
};
