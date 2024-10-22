import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'; // Import React icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center gap-5 w-full'>
        <NavLink to='/employees'>
          <img 
            src="https://chilot.wordpress.com/wp-content/uploads/2023/02/debc4-ethiopian-customs-commission.png?w=640" 
            alt="logo" className='w-12 max-h-12' 
          />
        </NavLink>

        <div id="collapseMenu"
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:block max-lg:w-full max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
          {/* Close button (visible in mobile) */}
          <button id="toggleClose" onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
            <AiOutlineClose className="w-4 fill-black cursor-pointer " />
          </button>

          <ul className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3'>
            <li className='mb-6 hidden max-lg:block'>
              <NavLink to='/employees'>
                <img 
                  src="https://chilot.wordpress.com/wp-content/uploads/2023/02/debc4-ethiopian-customs-commission.png?w=640" 
                  alt="logo" className='w-36' 
                />
              </NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink 
                to='/employees' 
                className={({ isActive }) => 
                  `lg:hover:text-[#007bff] block font-semibold text-[15px] ${isActive ? 'text-[#007bff]' : 'text-gray-500'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Services</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink 
                to='/contact' 
                className={({ isActive }) => 
                  `lg:hover:text-[#007bff] block font-semibold text-[15px] ${isActive ? 'text-[#007bff]' : 'text-gray-500'}`
                }
              >
                Contact us
              </NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink className={({ isActive }) => 
                  `lg:hover:text-[#007bff] block font-semibold text-[15px] ${isActive ? 'text-[#007bff]' : 'text-gray-500'}`
                } to='/news'>
              News
                </NavLink>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
            </li>
          </ul>
        </div>

        <button 
          id="toggleOpen" 
          onClick={toggleMenu} 
          className='lg:hidden ml-auto p-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-200'>
          <AiOutlineMenu className="w-7 h-7 fill-black" />
        </button>
        <div className='flex lg:ml-auto max-lg:w-full'>
          <div className='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent'>
            <input
              type='text'
              placeholder='Search something...'
              className='w-full text-sm bg-transparent rounded outline-none pr-2'
            />
            <AiOutlineSearch className="cursor-pointer fill-gray-400" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
