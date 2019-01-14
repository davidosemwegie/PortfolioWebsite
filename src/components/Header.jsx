import React from 'react';

const Header = (props) => {
    return (
        <div id="Header">
            <h1 id="name">DAVID OSEMWEGIE</h1>
            <div id="nav">
                <ul>
                    <li><a className='navLink' href="">ABOUT</a></li>
                    <li><a className='navLink' href="">RESUME</a></li>
                    <li><a className='navLink' href="">PROJECTS</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;