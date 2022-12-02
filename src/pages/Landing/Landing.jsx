import "./LandingStyles/landingMain.scss";
import blackArm from "../../assets/backgroundImages/blackArmour.png";
import dragArm from "../../assets/backgroundImages/dragArmour.png";
import mastArm from "../../assets/backgroundImages/MastArmour.png";

const Landing = () => {
    return (
        <div className='landing'>
            <header className='landing__header'>
                <h1 className='landing__header--text'> Welcome </h1>
            </header>
            <div className='landing__body'>
                <p className='landing__body landing__body--text'>
                    Tired of buying melee gear in game to see how it works for
                    you?
                </p>
                <p className='landing__body landing__body--text'>
                    Look no further than the RS3 Melee Database, here you can
                    look up
                    <br />
                    specific gear, check individual item's stats and compare
                    like for like
                    <br />
                    gear pieces to see what suits your needs best.
                </p>
            </div>
            <div className='landing__image'>
                <img
                    src={blackArm}
                    alt='blArm'
                    className='landing__image landing__image--blackArmour'
                />
                <img
                    src={dragArm}
                    alt='drArm'
                    className='landing__image landing__image--dragArmour'
                />
                <img
                    src={mastArm}
                    alt='msArm'
                    className='landing__image landing__image--mastArmour'
                />
            </div>
        </div>
    );
};

export default Landing;
