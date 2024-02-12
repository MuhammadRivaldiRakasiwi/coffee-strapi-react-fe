import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react';

function NavigationBar() {
    useEffect(() => {
        const navbarShrink = () => {
            const navbarCollapsible = document.getElementById('mainNav');
            if (!navbarCollapsible) return;

            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };

        // Shrink the navbar 
        navbarShrink();

        // Shrink the navbar when page is scrolled
        window.addEventListener('scroll', navbarShrink);

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.querySelector('.navbar-toggler');
        const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
        responsiveNavItems.forEach(responsiveNavItem => {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', navbarShrink);
            responsiveNavItems.forEach(responsiveNavItem => {
                responsiveNavItem.removeEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });
        };
    }, []);

    return (
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Coffee</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
}

export default NavigationBar;

