import React from 'react'
import { Search } from 'lucide-react';


function SearchBar() {
    return (
        <>
            <div className="flex-1 max-w-lg mx-2 md:mx-4 sm:mx-6 sm:px-2">
                <div className="relative group">
                    {/* Animated gradient border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 rounded-md opacity-75 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-shift"></div>
                    
                    {/* Search input */}
                    <div className="relative bg-white rounded-md">
                        <input
                            type="text"
                            placeholder="Search Rings"
                            className="w-full pl-4 pr-10 py-2 bg-transparent border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm relative z-10 "
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                            <Search className="h-5 w-5 text-gray-400 hover:text-pink-500 transition-colors" />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
            `}</style>
        </>
    )
}

export default SearchBar







// Old Search Bar



// import React from 'react'
// import { Search } from 'lucide-react';
// function SearchBar() {
//     return (
//         <>
//             <div className="flex-1 max-w-lg mx-2 md:mx-4 sm:mx-6 sm:px-2">
//                 <div className="relative">
//                     <input
//                         type="text"
//                         placeholder="Search Rings"
//                         className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
//                     />
//                     <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
//                         <Search className="h-5 w-5 text-gray-400" />
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchBar
