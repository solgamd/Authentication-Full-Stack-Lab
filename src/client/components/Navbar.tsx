import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps { }

export interface NavbarState { }

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-secondary bg-alert d-flex">
            <a className="navbar-brand mr-auto" href="/">MY BLOG</a>
            <div>
                <div className="collapse navbar-collapse d-flex flex-row">
                </div>
                <div className="navbar-nav">

                    <NavLink exact to="/"
                        className="nav-item nav-link mx-2"
                        activeClassName="nav-item nav-link active text-success">Blog Feed</NavLink>

                    <NavLink exact to="/admin"
                        className="nav-item nav-link mx-2"
                        activeClassName="nav-item nav-link active text-success">Edit Blogs</NavLink>

                    <NavLink exact to="/new"
                        className="nav-item nav-link mx-2"
                        activeClassName="nav-item nav-link active text-success">Write New Post</NavLink>

                    <NavLink exact to="/donate"
                        className="nav-item nav-link mx-2"
                        activeClassName="nav-item nav-link active text-success">Donate</NavLink>

                    <NavLink exact to="/contact"
                        className="nav-item nav-link mx-2"
                        activeClassName="nav-item nav-link active text-success">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
