import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Sets the header section of the page
        <header>
            {/*defines a navigation section*/}
            <nav>
                {/* creates an unordered list*/}
                <ul>
                    {/*creates a list item*/}
                    <li> <Link to = "/">Home</Link></li>
                    <li> <Link to = "/about">About</Link></li>
                    <li> <Link to = "/projects">Projects</Link></li>
                    <li> <Link to = "/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;