import { NavLink } from "react-router-dom";
import "./NavStyles/navMain.scss";

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink to={"*"} className='nav__link nav__link--home'>
                Home
            </NavLink>
            <NavLink to={"/database"} className='nav__link nav__link--database'>
                Database
            </NavLink>
            <a href='#' className='nav__link nav__link--compare'>
                Compare
            </a>
        </div>
    );
};

export default Nav;
