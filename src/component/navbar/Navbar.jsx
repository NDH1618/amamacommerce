import React from 'react'
import anh1 from './amazone1.png'
import anh3 from './amazon3.png'
import anh2 from './amazon2.png'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Search from './search'

const Navbar = () => {
  return (
    <header className='min-w-[1000px]'>
        <div className="flex bg-slate-800 text-white h-[60px]">
            <div className="flex items-center">
                <img src={anh2} className="h-[35px] w-[100px] m-2" />
                <div className="pr-4 pl-4">
                    <div className="text-xs xl:text-sm">Deliver to</div>
                    <div className="text-sm xl:text-base font-bold">Viet Nam</div>
                </div>
            </div>
            <div className="flex grow items-center">
                <Search />
            </div>
            <div className="flex items-center">
                <div className="pr-4 pl-4">
                    <div className="text-xs xl:text-sm">Hello, sign in</div>
                    <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
                </div>
                <div className="pr-4 pl-4">
                    <div className="text-xs xl:text-sm">Returns</div>
                    <div className="text-sm xl:text-base font-bold">& Orders</div>
                </div>
                <div className="flex pr-3 pl-3">
                    <HiOutlineShoppingCart className="h-[48px] w-9" />
                    <div className='mt-6 text-xs xl:text-sm font-bold'>
                        Cart
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar