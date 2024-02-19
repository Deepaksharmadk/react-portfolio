import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, } from "react-icons/bs";
function Footer() {
    const currentDate = new Date()
    console.log(currentDate);
    const currentYear = currentDate.getFullYear()
    console.log(currentYear);
    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='font-serif text-lg text-red'>
                    Copyright {currentYear} | All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 m-4 text-2xl text-white cursor-pointer'>
                    <a href='' className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsFacebook />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsInstagram />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsGithub />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsLinkedin />
                    </a>
                    <a className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>


    )
}

export default Footer