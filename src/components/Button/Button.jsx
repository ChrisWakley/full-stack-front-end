import "./ButtonStyles/buttonMain.scss";

const Button = ({ buttonText, handleClick, buttonClass }) => {
    return (
        <>
            <button className={buttonClass} onClick={handleClick}>
                {buttonText}
            </button>
        </>
    );
};

export default Button;
