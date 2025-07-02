import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky-top z-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 py-2">
                <div className="container-fluid d-flex flex-wrap align-items-center position-relative">
                    {/* Logo on the left */}
                    <Link to="/" className="d-flex align-items-center order-1 order-lg-1 me-lg-3">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="me-3" style={{ height: '48px' }}
                            alt="Logo"
                        />
                    </Link>
                    {/* Nav links centered */}
                    <div className="collapse navbar-collapse justify-content-center order-3 order-lg-2" id="mobile-menu-2">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-2">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link px-3${isActive ? ' text-warning fw-bold' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `nav-link px-3${isActive ? ' text-warning fw-bold' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `nav-link px-3${isActive ? ' text-warning fw-bold' : ''}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `nav-link px-3${isActive ? ' text-warning fw-bold' : ''}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center order-2 order-lg-3 ms-lg-auto">
                        <Link
                            to="#"
                            className="btn btn-outline-secondary me-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="btn btn-dark text-white me-2"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
