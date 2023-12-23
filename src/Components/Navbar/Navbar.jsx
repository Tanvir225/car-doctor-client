import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import {AiOutlineShopping} from 'react-icons/ai'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    //GET CONTEXt
    const {logOut,user} = useContext(AuthContext)

    //handle logOut
    const handleLogout = ()=>{
        logOut()
        toast.success('logout successfull')
    }

    //navlinks 
    const links = 
    <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 py-7 px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={"/"}>
                    <img src={logo} alt="logo"  />
                </Link>
            </div>
            <div className="text-lg hidden lg:flex ">
                <ul className="flex items-center gap-10 px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                
                {
                    user ? 
                    
                    <div className="flex items-center gap-7">
                        <AiOutlineShopping className="text-3xl "></AiOutlineShopping>
                        <NavLink to={"/my-services"}>My Services</NavLink>
                        <img src={user.photoURL} alt={`${user.diaplayName} image`} className="w-[58px] rounded-full" />
                        <button onClick={handleLogout} className="btn btn-outline bg-transparent md:w-40 font-bold text-lg text-[#FF3811]">Logout</button>
                    </div>
                    :
                    <Link to={"/login"} className="btn btn-outline bg-transparent md:w-48 font-bold text-lg text-[#FF3811]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;