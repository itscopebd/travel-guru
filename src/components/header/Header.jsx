import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
const Header = () => {
    return (
        <div className='container mx-auto px-10 py-5 header'>
            <ul className='flex justify-between items-center text-white'>
                <li>
                    <Link>
                    <img src="images/logo.png" alt="" />
                    </Link>
                </li>
                <li>
                    <input type="search" placeholder='Search ' />
                </li>
                <li>
                    <Link>News</Link>
                </li>
                <li>
                    <Link>Destination</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
                <li>
                    <Link>Contact </Link>
                </li>
                <li>
                    <Link> <button>Login</button> </Link>
                </li>

            </ul>
            
        </div>
    );
};

export default Header;