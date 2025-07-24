import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
    return (
        <>
            <nav className='py-6 px-20 flex justify-between items-center'>
                <Link>
                    <img src='/logo.png' className='h-7' />
                </Link>

                <Button variant="outline">Login</Button>
            </nav>
        </>
    )
}

export default Header
