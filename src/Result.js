import { useEffect, useState } from "react";
import "./Result.css";

const Result = (props) => {
    const { score, bestResult } = props;
    const [rank, setRank] = useState(null);

    useEffect(() => {
        if (score < 250) {
            setRank("As quick as a flash");
        } else if (score < 400) {
            setRank("Rapid Reflexes");
        } else {
            setRank("Preety slow...");
        }
    }, []);

    return (
        <div className="result">
            <p className="score">
                <span>Reaction time: </span>
                {score} ms
            </p>
            <p className="rank">
                <span>Grade: </span>
                {rank}
            </p>
            <p className="best">
                <span> Best result: </span>
                {bestResult} ms
            </p>
        </div>
    );
};

export default Result;
