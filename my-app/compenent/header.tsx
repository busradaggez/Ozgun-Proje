import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const HeaderPage = () => {
    return (
        <div className="font-sans font-semibold">
            <div className=" w-full h-[113px] bg-red-800">
                <div className=" container mx-auto text-white flex justify-between items-center pl-8 pr-20">
                    <div className="text-64">ShoesWala</div>
                    <div className=" flex gap-20 items-end text-35">
                        <Link href="#">Home</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Category</Link>
                        <Link href="#">Help</Link>
                        <button>
                            <RxHamburgerMenu className=" flex items-center" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage