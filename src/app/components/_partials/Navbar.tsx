import React, { useState, useEffect, useRef } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Hide dropdown when sidebar is toggled
    setIsDropdownOpen(false);
  }, [toggleSidebar]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-green-800 p-4 text-white flex justify-between">
      <button id="toggleSidebarButton" className="text-white" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {/* Icon Profile */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
          <UserCircleIcon className="h-6 w-6" />
          <p className="text-sm">Lamin H Datau</p>
        </button>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg right-0">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
