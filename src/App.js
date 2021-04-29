import { useState } from "react";
import "./App.css";
import Block from "./Block";
import Error from "./Error";
import Result from "./Result";
import Dots from "./Dots";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [delay, setDelay] = useState(null);
    const [score, setScore] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [showDots, setShowDots] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [reactionTime, setReactionTime] = useState(null);
    const [bestResult, setBestResult] = useState(null);

    const start = () => {
        setDelay(2000 + Math.floor(Math.random() * 5000));
        setIsPlaying(true);
        setShowBlock(false);
        setShowResult(false);
        setShowDots(true);
        setShowError(false);
        setReactionTime(0);
        setScore(0);
    };

    const endGame = () => {
        setScore(reactionTime);
        if (!bestResult || reactionTime < bestResult) {
            setBestResult(reactionTime);
        }
        setIsPlaying(false);
        setShowResult(true);
    };

    const throwError = (event) => {
        if (
            !event.target.classList.contains("block") &&
            isPlaying &&
            !showBlock
        ) {
            setShowError(true);
            setIsPlaying(false);
            setShowDots(false);
        }
    };

    const handleShowBlock = () => {
        setShowBlock(true);
    };

    const handleReactionTime = (reactionTime) => {
        setReactionTime(reactionTime);
    };

    const handleHideDots = () => {
        setShowDots(false);
    };

    return (
        <div className="App" onClick={throwError}>
            <h1>Reaction Timer</h1>
            <button disabled={isPlaying} onClick={start}>
                Play
            </button>
            {isPlaying && (
                <Block
                    delay={delay}
                    showBlock={showBlock}
                    handleReactionTime={handleReactionTime}
                    handleShowBlock={handleShowBlock}
                    handleHideDots={handleHideDots}
                    endGame={endGame}
                />
            )}
            {showError && <Error />}
            {showResult && <Result score={score} bestResult={bestResult} />}
            {showDots && <Dots />}
        </div>
    );
}

export default App;
