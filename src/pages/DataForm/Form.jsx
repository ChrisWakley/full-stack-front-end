import "./DataFormStyles/dataFormMain.scss";

const DataForm = () => {
    <div className='form'>
        <header className='form__header'>
            Need to add a new piece of gear to the databanks?
        </header>
        <div className='formContainer'>
            <div className='formContainer__id'>
                <p className='formContainer__id--text'>ID</p>
                <input type='text' className='formContainer__idInput' />
            </div>
            <div className='formContainer__tier'>
                <p className='formContainer__tier--text'>Tier</p>
                <input type='text' className='formContainer__tierInput' />
            </div>
            <div className='formContainer__material'>
                <p className='formContainer__material--text'>Material</p>
                <input type='text' className='formContainer__materialInput' />
            </div>
            <div className='formContainer__name'>
                <p className='formContainer__name--text'>Name</p>
                <input type='text' className='formContainer__nameInput' />
            </div>
            <div className='formContainer__type'>
                <p className='formContainer__type--text'>Type</p>
                <input type='text' className='formContainer__typeInput' />
            </div>
            <div className='formContainer__handle'>
                <p className='formContainer__handle--text'>Handle</p>
                <input type='text' className='formContainer__handleInput' />
            </div>
            <div className='formContainer__sDamage'>
                <p className='formContainer__sDamage--text'>
                    Auto Attack Damage
                </p>
                <input type='text' className='formContainer__sDamageInput' />
            </div>
            <div className='formContainer__aDamage'>
                <p className='formContainer__aDamage--text'>Ability Damage</p>
                <input type='text' className='formContainer__aDamageInput' />
            </div>
            <div className='formContainer__accuracy'>
                <p className='formContainer__accuracy--text'>Accuracy</p>
                <input type='text' className='formContainer__accuracyInput' />
            </div>
            <div className='formContainer__pBonus'>
                <p className='formContainer__pBonus--text'>Prayer Bonus</p>
                <input type='text' className='formContainer__pBonusInput' />
            </div>
            <div className='formContainer__lpBonus'>
                <p className='formContainer__lpBonus--text'>Life Point Bonus</p>
                <input type='text' className='formContainer__lpBonusInput' />
            </div>
            <div className='formContainer__dRating'>
                <p className='formContainer__dRating--text'>Defence Rating</p>
                <input type='text' className='formContainer__dRatingInput' />
            </div>
            <div className='formContainer__style'>
                <p className='formContainer__style--text'>Attack Style</p>
                <input type='text' className='formContastyle__tierInput' />
            </div>
            <div className='formContainer__image'>
                <p className='formContainer__image--text'>Image URL</p>
                <input type='text' className='formContainer__imageInput' />
            </div>
        </div>
    </div>;
};

export default DataForm;
