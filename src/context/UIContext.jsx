import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const useUIContext = () => {
    return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const value = {
        isLocationOpen,
        setIsLocationOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        toggleSidebar
    };

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    );
};
