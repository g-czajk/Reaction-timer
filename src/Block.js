import { useState, useEffect } from "react";
import "./Block.css";

const Block = (props) => {
    const {
        delay,
        showBlock,
        handleShowBlock,
        handleReactionTime,
        handleHideDots,
        endGame,
    } = props;
    const [timer, setTimer] = useState(null);
    let time = 0;
    let timeout = 0;

    const startTimer = () => {
        handleHideDots();
        setTimer(
            setInterval(() => {
                time += 10;
                handleReactionTime(time);
            }, 10)
        );
    };

    const stopTimer = () => {
        clearInterval(timer);
        endGame();
    };

    useEffect(() => {
        timeout = setTimeout(() => {
            handleShowBlock();
            startTimer();
        }, delay);
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="block-wrapper">
            {showBlock && (
                <div className="block" onClick={stopTimer}>
                    click me
                </div>
            )}
        </div>
    );
};

export default Block;
