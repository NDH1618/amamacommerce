import React from 'react'
import {FiSearch} from 'react-icons/fi'

const Search = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex items-center bg-orange-500 h-10 rounded-md'>
            <select className='h-[100%] text-black bg-gray-300 border rounded-sm text-center flex items-center'>
                <option>All</option>
                <option>details</option>
                <option>amazone</option>
                <option>fashion</option>
                <option>computer</option>
                <option>mobies</option>
            </select>
            <input type='text' className='h-[100%] flex-grow' />
            <button className='h-[100%]'>
                <FiSearch className='h-[29px] w-[55px] m-auto ' />
            </button>
        </div>
    </div>
  )
}

export default Search