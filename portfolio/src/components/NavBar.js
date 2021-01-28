import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-blue-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-red-900"
                    className="inline-flex items-center py-6 px-3 mr-4 text-white text-4xl font-bold tracking-widest">
                        Tareeq Hamilton
                    </NavLink>
                    <NavLink 
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white"
                    activeClassName="bg-blue-900">
                        Posts 
                    </NavLink>
                    <NavLink 
                    to="/projects"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white"
                    activeClassName="bg-blue-900">
                        Projects 
                    </NavLink>
                    <NavLink 
                    to="about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white"
                    activeClassName="bg-blue-900">
                        About Me
                    </NavLink>
                </nav>
                <div>
                    
                </div>
            </div>
        </header>
    )
}