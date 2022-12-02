import "./NavStyles/navMain.scss";

const Nav = () => {
    return (
        <div className='nav'>
            <a href='#' className='nav__link nav__link--home'>
                Home
            </a>
            <a href='#' className='nav__link nav__link--database'>
                Database
            </a>
            <a href='#' className='nav__link nav__link--compare'>
                Compare
            </a>
        </div>
    );
};

export default Nav;
