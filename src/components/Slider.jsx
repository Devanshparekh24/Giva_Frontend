import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Pendants',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Anklets',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: "Men's",
    image: 'https://images.unsplash.com/photo-1588444837495-c6c96f3aa5a6?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Mangalsutras',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop'
  }
];

function Slider() {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  return (
    <div className="w-full bg-white flex flex-col items-center pt-8 pb-12">
      {/* Slider */}
      <div className="relative w-full max-w-7xl px-5">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            aria-label="Scroll left"
            className="absolute left-[-28px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Scrollable categories */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-1"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={handleScroll}
        >
          {categories.map(c => (
            <div key={c.id} className="flex flex-col items-center min-w-[160px]">
              <div className="w-[150px] h-[150px] bg-white rounded-[40px] border border-pink-200 flex items-center justify-center overflow-hidden mb-3 transition-transform">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-[400px] h-[400px] object-cover rounded-3xl"
                />
              </div>
              <span className="mt-1 text-lg font-medium text-gray-800 tracking-wide text-center">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            aria-label="Scroll right"
            className="absolute right-[-28px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}
      </div>
      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default Slider;
