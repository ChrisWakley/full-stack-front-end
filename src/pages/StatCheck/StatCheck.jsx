import "./StatCheckStyles/statCheckMain.scss";
import Button from "../../components/Button/Button";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StatCheck = () => {
    const [stats, setStats] = useState([]);
    const [material, setMaterial] = useState("");

    const getStats = async (url) => {
        const response = await fetch(url);
        const statsData = await response.json();
        setStats(statsData);
    };

    useEffect(() => {
        getStats("http://localhost:8080/stats/all");
    }, []);

    useEffect(() => {
        if (material) {
            switch (material) {
                case "bronze":
                    getStats("http://localhost:8080/stats/material/bronze");
                    break;
                case "iron":
                    getStats("http://localhost:8080/stats/material/iron");
                    break;
                case "steel":
                    getStats("http://localhost:8080/stats/material/steel");
                    break;
                default:
                    getStats("http://localhost:8080/stats/all");
            }
        }
    }, [material]);

    const handleMaterial = (event) => {
        const cleanedInput = event.target.innerHTML.toLowerCase();
        setMaterial(cleanedInput);
    };

    return (
        <div className='statCheck'>
            <div className='statCheck__header'>
                Database
                <div className='statCheck__headerLink'>
                    <Link to={"/form"} className='statCheck__headerLink--text'>
                        Add New
                    </Link>
                </div>
            </div>
            <nav className='statCheck__nav'>
                <Button
                    buttonClass='button__bronze'
                    buttonText='Bronze'
                    handleClick={handleMaterial}
                />
                <Button
                    buttonClass='button__iron'
                    buttonText='Iron'
                    handleClick={handleMaterial}
                />
                <Button
                    buttonClass='button__steel'
                    buttonText='Steel'
                    handleClick={handleMaterial}
                />
            </nav>
            <CardContainer stats={stats} />
        </div>
    );
};

export default StatCheck;
