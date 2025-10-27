import React, { useEffect, useState } from 'react'
import { fetchNavbarData } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function Sidebar() {
    const [openSidebarSubMenu, setOpenSidebarSubMenu] = useState(null); // State for currently open sidebar sub-menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.navbar);

    useEffect(() => {
        dispatch(fetchNavbarData());
    }, [dispatch]);


    const toggleSidebar = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Giva</h2>
                    <button
                        onClick={toggleSidebar}
                        className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="p-4">
                    {/* Dynamic Category Navigation in Sidebar */}
                    <div className="mt-4   pt-4 space-y-2">
                        {loading && <div>Loading navigation...</div>}
                        {error && <div>Error: {error}</div>}
                        {data &&
                            data.data &&
                            data.data.map((navItem) => (
                                <div key={navItem.Navid}>
                                    {navItem.subMenus && navItem.subMenus.length > 0 ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setOpenSidebarSubMenu(
                                                        openSidebarSubMenu === navItem.Navid
                                                            ? null
                                                            : navItem.Navid
                                                    )
                                                }
                                                className="flex items-center justify-between w-full py-3 px-3 text-left rounded-md hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                <span className="text-gray-800 font-medium">
                                                    {navItem.title}
                                                </span>
                                                {openSidebarSubMenu === navItem.Navid ? (
                                                    <ChevronUp className="h-4 w-4 text-gray-600" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 text-gray-600" />
                                                )}
                                            </button>
                                            {openSidebarSubMenu === navItem.Navid && (
                                                <ul className="pl-4 space-y-1">
                                                    {navItem.subMenus.map((subMenu) => (
                                                        <li key={subMenu.NavSubid}>
                                                            <a
                                                                href={`/${navItem.title
                                                                    .toLowerCase()
                                                                    .replace(/\s/g, "-")}/${subMenu.title
                                                                        .toLowerCase()
                                                                        .replace(/\s/g, "-")}`}
                                                                className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                                                onClick={toggleSidebar} // Close sidebar on item click
                                                            >
                                                                {subMenu.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            key={navItem.Navid}
                                            href={`/${navItem.title
                                                .toLowerCase()
                                                .replace(/\s/g, "-")}`} // Adjust href based on actual links
                                            className="flex items-center w-full py-3 px-3 text-left rounded-md hover:bg-gray-100 transition-colors duration-200"
                                            onClick={toggleSidebar} // Close sidebar on item click
                                        >
                                            <span className="text-gray-800 font-medium">
                                                {navItem.title}
                                            </span>
                                        </a>
                                    )}
                                </div>
                            ))}
                    </div>
                </nav>
            </div>

        </>)
}

export default Sidebar