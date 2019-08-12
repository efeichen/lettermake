import React, { useState } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';
import logo from '../treadmill.svg';

const Header = () => {
    const [navbarActive, setNavbar] = useState(false);
    const toggleNavbar = () => {
        setNavbar(!navbarActive);
    }

    return (
        <Navbar active={navbarActive}>
            <Container fluid>
                <Navbar.Brand>
                    <Navbar.Item renderAs={Link} to='/'>
                        <img className='navbar--logo' src={logo} alt='logo' />
                    </Navbar.Item>
                    <Navbar.Burger onClick={toggleNavbar} />
                </Navbar.Brand>
                <Navbar.Container position='end'>
                    <Navbar.Menu>
                        <Navbar.Item renderAs={Link} to='/'>Home</Navbar.Item>
                        <Navbar.Item renderAs={Link} to='/about'>About</Navbar.Item>
                        <Navbar.Item renderAs='a' href='https://www.buymeacoffee.com/qPe8J7L'>Donate</Navbar.Item>
                    </Navbar.Menu>
                </Navbar.Container>
            </Container>
        </Navbar>
    )

}

export default Header;