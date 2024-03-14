import { useState } from 'react';
import Image from "next/image";
import { InboxIcon, NewspaperIcon, CurrencyDollarIcon, ChartBarIcon, CogIcon, EyeIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  onItemClick: (page: string) => void;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick, toggleSidebar }) => {
  const [isOpen] = useState(false);

  return (
    <div className={`bg-green-800 text-white transition-transform ease-in-out duration-300 md:w-64 ${isOpen ? 'w-64' : 'w-15'}`}>
      {/* Sidebar Content */}
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 text-white bold">
          <Image src="/message.svg" alt="Logo" width={50} height={40} />
        </div>

        <nav className={`flex-1 items-center justify-center h-20 ${isOpen ? 'hidden' : ''}`}>
          <ul className="py-4">
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('messages')}>
              <InboxIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Message</a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('broadcast')}>
              <NewspaperIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Broadcast</a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('finance')}>
              <CurrencyDollarIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Finance</a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('report')}>
              <ChartBarIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Report</a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('settings')}>
              <CogIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Pengaturan</a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-green-700 hover:cursor-pointer" onClick={() => onItemClick('integrasi')}>
              <EyeIcon className="h-6 w-6 mr-2" />
              <a href="#" className={`${isOpen ? '' : 'hidden md:block'} ml-2`} >Integrasi</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default Sidebar;
