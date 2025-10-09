import { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  Store,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Store, label: "STORES" },
    { icon: User, label: "ACCOUNT" },
    { icon: Heart, label: "WISHLIST" },
    { icon: ShoppingCart, label: "CART" },
  ];

  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   
  );
}
export default App;
