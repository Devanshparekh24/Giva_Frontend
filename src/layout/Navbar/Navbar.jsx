import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarData } from "../../redux";
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronUp,
  Store,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
function Navbar() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSidebarSubMenu, setOpenSidebarSubMenu] = useState(null); // State for currently open sidebar sub-menu

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbarData());
  }, [dispatch]);

  const menuItems = [
    { icon: Store, label: "STORES" },
    { icon: User, label: "ACCOUNT" },
    { icon: Heart, label: "WISHLIST" },
    { icon: ShoppingCart, label: "CART" },
  ];

  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <>

      <div className="w-full font-lato">
        {/* Promotional Banner */}
        <div className="bg-orange-100 text-center py-2 px-4">
          <p className="text-sm font-medium text-gray-800">
            Rakshabandhan Sale is LIVE!
          </p>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Button */}
              <button onClick={toggleSidebar} className="md:hidden p-2">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Logo Section */}
              <div className="flex-shrink-0">
                {/* Logo */}
                <div className="text-xl md:text-2xl font-bold text-black tracking-wider">
                  <a href="/">GIVA</a>
                </div>
                {/* Location Selector - Under Logo (Small devices only) */}
                <div className="sm:hidden flex items-center relative mt-1">
                  <button
                    onClick={() => setIsLocationOpen(!isLocationOpen)}
                    className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-800"
                  >
                    <MapPin className="h-3 w-3" />
                    <div className="text-left">
                      <div className="font-medium text-xs">Pincode</div>
                    </div>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {isLocationOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="p-3">
                        <div>
                          <X
                            onClick={() => setIsLocationOpen(false)}
                            className="h-6 w-6 text-gray-500 cursor-pointer"
                            size={24}
                          />{" "}
                        </div>
                        <input
                          type="text"
                          placeholder="Enter pincode"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                        />
                        <button className="font-lato w-full mt-2 bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 text-sm">
                          Update
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Location Selector - Regular position (sm+ devices) */}
              <div className="hidden sm:flex items-center relative">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 border-r border-gray-200 pr-4 "
                >
                  <MapPin className="h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">Where to Deliver?</div>
                    <div className="text-xs text-gray-500">
                      Update Delivery Pincode
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isLocationOpen && (
                  <div className="absolute top-full   bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="p-4">
                      <input
                        type="text"
                        placeholder="Enter pincode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                      />
                      <button className=" font-lato w-full mt-2 bg-[linear-gradient(92.32deg,_rgb(255,185,199)_12.41%,_rgb(255,229,234)_99.21%)] text-white py-2 rounded-md hover:bg-pink-700 text-sm">
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-2 md:mx-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Rings"
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Right Side Icons - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-6">
                <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                  <Store className="h-5 w-5" />
                  <span className="text-xs mt-1">STORES</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                  <User className="h-5 w-5" />
                  <span className="text-xs mt-1">ACCOUNT</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                  <Heart className="h-5 w-5" />
                  <span className="text-xs mt-1">WISHLIST</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-xs mt-1">CART</span>
                </button>
              </div>

              {/* Mobile Cart Icon */}
              <div className="md:hidden">
                <button className="p-2 text-gray-600 hover:text-gray-800">
                  <Store className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800">
                  <User className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800">
                  <ShoppingCart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="relative">
            {/* Overlay */}
            {isMobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleSidebar}
              />
            )}

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
                <div className="space-y-2">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={index}
                        className="flex items-center w-full py-3 px-3 text-left rounded-md hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => {
                          // Handle menu item click
                          console.log(`${item.label} clicked`);
                          // Optionally close sidebar after selection
                          setisMobileMenuOpen(false);
                        }}
                      >
                        <IconComponent className="h-5 w-5 mr-3 text-gray-600" />
                        <span className="text-gray-800 font-medium">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Category Navigation in Sidebar */}
                <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
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
          </div>
        </nav>

        {/* Category Navigation */}
        <nav className="bg-white border-b border-gray-200 hidden sm:block">
          <div className="relative">
            <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="font-lato flex flex-wrap items-center justify-start md:justify-center space-x-2 sm:space-x-6 md:space-x-8 py-3 ">
                <div className="flex flex-wrap items-center space-x-2 sm:space-x-6 md:space-x-8  ">
                  {loading && <div>Loading navigation...</div>}
                  {error && <div>Error: {error}</div>}
                  {data && data.data && data.data.map((navItem) => navItem.title === "Shop by Category" ?
                    (
                      <div
                        key={navItem.Navid}
                        className="relative inline-block"
                      >
                        <button
                          onClick={toggleCategoryMenu}
                          className="flex items-center whitespace-nowrap text-gray-700 hover:text-pink-600 font-medium text-sm md:text-base"
                        >
                          {navItem.title}
                          {isCategoryOpen ? (
                            <ChevronUp className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                          ) : (
                            <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                          )}
                        </button>

                        {isCategoryOpen && (
                          <div className="absolute left-0 mt-2 z-50 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                            <ul className="py-2 text-sm text-gray-700">
                              {navItem.subMenus &&
                                navItem.subMenus.map((subMenu) => (
                                  <li key={subMenu.NavSubid}>
                                    <a
                                      href={`/category/${subMenu.title.toLowerCase()}`}
                                      className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                      {subMenu.title}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : navItem.subMenus && navItem.subMenus.length > 0 ? (
                      <div
                        key={navItem.Navid}
                        className="relative inline-block"
                      >
                        <button

                          onClick={() => {

                            // Handle other sub-menu toggles if needed
                          }}
                          className="flex items-center whitespace-nowrap text-gray-700 hover:text-pink-600 font-medium text-sm md:text-base"
                        >
                          {navItem.title}
                          <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                        </button>
                        {/* Add dropdown content for other subMenus here if needed */}
                      </div>
                    ) : (
                      <a
                        key={navItem.Navid}
                        href="#" // Adjust href based on actual links
                        className=" whitespace-nowrap text-gray-700 hover:text-pink-600 font-medium text-sm md:text-base"
                      >
                        {navItem.title}

                      </a>

                    )
                  )}


                </div>


              </div>
            </div>
          </div>
          
        </nav>
      </div>
    </>
  );
}

export default Navbar;
