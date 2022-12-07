import "./cardContainerStyles/cardContainerMain.scss";
import Card from "../Card/Card";

const CardContainer = ({ stats }) => {
    const statsCards = stats.map((stat) => {
        return <Card key={stat.id} stat={stat} />;
    });

    return <div className='cardContainer'>{statsCards}</div>;
};

export default CardContainer;
