import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps { }

export interface NavbarState { }

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-secondary bg-success d-flex">
            <a className="navbar-brand mr-auto text-secondary" href="/">MY BLOG</a>
            <div>
                <div className="collapse navbar-collapse d-flex flex-row">
                </div>
                <div className="navbar-nav">

                    <NavLink exact to="/"
                        className="nav-item nav-link mx-2 text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Blog Feed</NavLink>

                    <NavLink exact to="/admin"
                        className="nav-item nav-link mx-2  text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Edit Blogs</NavLink>

                    <NavLink exact to="/new"
                        className="nav-item nav-link mx-2  text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Write New Post</NavLink>

                    <NavLink exact to="/donate"
                        className="nav-item nav-link mx-2  text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Donate</NavLink>

                    <NavLink exact to="/contact"
                        className="nav-item nav-link mx-2  text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Contact</NavLink>

                    {/* <NavLink exact to="/register"
                        className="nav-item nav-link mx-2  text-secondary"
                        activeClassName="nav-item nav-link active text-alert">Register</NavLink> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
