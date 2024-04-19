import React, {useState} from "react";
import menubar from "./images/menubar.svg";
import { Link } from "react-router-dom";
import cross from "./images/cross.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
    <nav className="flex items-center bg-black py-5 text-white">
        <img src={menubar} alt="menuicon" className="w-10 cursor-pointer px-2 hover:w-11" onClick={handleNav} />
        <h1 className="font-bold px-4 text-2xl pr-96">FitMadEasy</h1>
        <ul className="flex-1 text-center hidden md:flex">
            <li className="list-none inline-block px-5"><NavLink className={({isActive}) => {return ('text-white hover:bg-slate-950 hover:font-semibold p-5 border-b-2'+(!isActive ? 'border-b-4' : '' ));}} to="/" >Home</NavLink></li>
            <li className="list-none inline-block px-5"><NavLink className={({isActive}) => {return ('text-white hover:bg-slate-950 hover:font-semibold p-5 border-b-2'+(!isActive ? 'border-b-4' : '' ));}} to="/About" >About</NavLink></li>
            <li className="list-none inline-block px-5"><NavLink className={({isActive}) => {return ('text-white hover:bg-slate-950 hover:font-semibold p-5 border-b-2'+(!isActive ? 'border-b-4' : '' ));}} to="/Fitness" >Fitness</NavLink></li>
            <li className="list-none inline-block px-5"><NavLink className={({isActive}) => {return ('text-white hover:bg-slate-950 hover:font-semibold p-5 border-b-2'+(!isActive ? 'border-b-4' : '' ));}} to="/Nutrition" >Nutrition</NavLink></li>
        </ul>
        <div className={nav ? "fixed top-0 left-0 w-60 bg-black/90 h-full border-r-gray-900 border-r ease-in-out duration-700 z-10" : "fixed left-[-50%] ease-in-out duration-700"}>
            <div className="flex p-5 bg-black">
               <img src={cross} alt="menuicon" className="w-10 cursor-pointer hover:w-11 p-2" onClick={handleNav} />
               <h1 className="font-bold px-4 text-2xl ">FitMadEasy</h1>
            </div>
            <ul className="pt-15" >
                <li className="p-5 border-b border-b-gray-700 border-t  hover:border-b-gray-200"><Link className="no-underline text-white p-5" to="/">Home</Link></li>
                <li className="p-5 border-b border-b-gray-700 hover:border-b-gray-200"><Link className="no-underline text-white p-5" to="/About">About</Link></li>
                <li className="p-5 border-b border-b-gray-700 hover:border-b-gray-200"><Link className="no-underline text-white p-5" to="/Fitness">Fitness</Link></li>
                <li className="p-5 border-b border-b-gray-700 hover:border-b-gray-200"><Link className="no-underline text-white p-5" to="/Nutrition">Nutrition</Link></li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;
