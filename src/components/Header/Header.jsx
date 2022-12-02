import "./HeaderStyles/headerMain.scss";
import draglong from "../../assets/backgroundImages/dLong.png";
import dragSquare from "../../assets/backgroundImages/dSquare.png";

const Header = () => {
    return (
        <header className='header'>
            <img
                src={draglong}
                alt='dSword'
                className='header__image header__image--sword'
            />
            <p className='header__title'> RS3 Melee Gear Database </p>
            <img
                src={dragSquare}
                alt='dShield'
                className='header__image header__image--sword'
            />
        </header>
    );
};

export default Header;
