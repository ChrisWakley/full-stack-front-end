import "./CardStyles/cardMain.scss";

const Card = ({ stat }) => {
    const {
        id,
        tier,
        material,
        name,
        type,
        handle,
        static_damage,
        ability_damage,
        accuracy,
        prayer_bonus,
        lifepoint_bonus,
        defence_rating,
        style,
        image,
    } = stat;

    return (
        <div className='card'>
            <header className='card__header'>
                <h1 className='card__header card__header--text'>
                    {material} {name}
                </h1>
            </header>
            <div className='card__imageContainer'>
                <img
                    src={image}
                    alt='RelatedGearImage'
                    className='card__imageContainer card__imageContainer--image'
                />
            </div>
            <div className='card__info'>
                <div className='card__infoMain'>
                    <div className='card__infoMain--tier'>
                        <h2 className='card__infoMain--tierDescription'>
                            Gear tier:
                        </h2>
                        <h3 className='card__infoMain--tierActual'>{tier}</h3>
                    </div>
                    <div className='card__infoMain--type'>
                        <h2 className='card__infoMain--typeDescription'>
                            Gear type:
                        </h2>
                        <h3 className='card__infoMain--typeActual'>{type}</h3>
                    </div>
                    <div className='card__infoMain--handle'>
                        <h2 className='card__infoMain--handleDescription'>
                            Held:
                        </h2>
                        <h3 className='card__infoMain--handleActual'>
                            {handle}
                        </h3>
                    </div>
                    <div className='card__infoMain--sDamage'>
                        <h2 className='card__infoMain--sDamageDescription'>
                            Auto attack damage:
                        </h2>
                        <h3 className='card__infoMain--sDamageActual'>
                            {static_damage}
                        </h3>
                    </div>
                    <div className='card__infoMain--aDamage'>
                        <h2 className='card__infoMain--aDamageDescription'>
                            Ability damage:
                        </h2>
                        <h3 className='card__infoMain--aDamageActual'>
                            {ability_damage}
                        </h3>
                    </div>
                </div>
                <div className='card__infoSub'>
                    <div className='card__infoSub--accuracy'>
                        <h2 className='card__infoSub--accuracyDescription'>
                            Accuracy:
                        </h2>
                        <h3 className='card__infoSub--accuracyActual'>
                            {accuracy}
                        </h3>
                    </div>
                    <div className='card__infoSub--pBonus'>
                        <h2 className='card__infoSub--pBonusDescription'>
                            Prayer bonus:
                        </h2>
                        <h3 className='card__infoSub--pBonusActual'>
                            {prayer_bonus}
                        </h3>
                    </div>
                    <div className='card__infoSub--lpBonus'>
                        <h2 className='card__infoSub--lpBonusDescription'>
                            lifepoints bonus:
                        </h2>
                        <h3 className='card__infoSub--lpBonusActual'>
                            {lifepoint_bonus}
                        </h3>
                    </div>
                    <div className='card__infoSub--dRating'>
                        <h2 className='card__infoSub--dRatingDescription'>
                            Defence rating:
                        </h2>
                        <h3 className='card__infoSub--dRatingActual'>
                            {defence_rating}
                        </h3>
                    </div>
                    <div className='card__infoSub--style'>
                        <h2 className='card__infoSub--styleDescription'>
                            Attack style:
                        </h2>
                        <h3 className='card__infoSub--styleActual'>{style}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
