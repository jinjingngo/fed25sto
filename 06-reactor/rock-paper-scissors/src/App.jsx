import { useState, useCallback, useEffect } from "react";
import "./App.css";

import Player from "./components/Player";
import Choice from "./components/Choice";

const CHOICES = [
  {
    name: "Rock",
    pic: "✊",
  },
  {
    name: "Paper",
    pic: "✋",
  },
  {
    name: "Scissors",
    pic: "✌",
  },
];

const randomChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

function App() {
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [playerResult, setPlayerResult] = useState("TIE");
  const [computerResult, setComputerResult] = useState("TIE");

  const playerChoseHandler = (index) => {
    setPlayerChoice(CHOICES[index]);
    setComputerChoice(randomChoice());
  };

  const isPlayerWinner = useCallback(() => {
    if (
      (playerChoice.name === "Scissors" && computerChoice.name === "Paper") ||
      (playerChoice.name === "Paper" && computerChoice.name === "Rock") ||
      (playerChoice.name === "Rock" && computerChoice.name === "Scissors")
    ) {
      return true;
    }
    return false;
  }, [playerChoice, computerChoice]);

  const showMatchResult = useCallback(() => {
    return playerChoice.name === computerChoice.name
      ? "It's a TIE"
      : isPlayerWinner()
      ? "You WON"
      : "You LOST";
  }, [playerChoice, computerChoice, isPlayerWinner]);

  useEffect(() => {
    if (playerChoice.name === computerChoice.name) {
      setPlayerResult("TIE");
      setComputerResult("TIE");
    } else if (isPlayerWinner()) {
      setPlayerResult("WON");
      setComputerResult("LOST");
    } else {
      setPlayerResult("LOST");
      setComputerResult("WON");
    }
  }, [
    playerChoice,
    computerChoice,
    setPlayerResult,
    setComputerResult,
    isPlayerWinner,
  ]);

  return (
    <div className="rock-paper-scissors">
      <Player
        result={playerResult}
        name={"Anti-Computer"}
        choice={playerChoice}
      />
      <Player
        result={computerResult}
        name={"Computer"}
        choice={computerChoice}
      />

      <span className="result">{showMatchResult()}</span>

      <div className="choice">
        {CHOICES.map((choice, index) => (
          <Choice
            key={index}
            {...choice}
            onChose={() => playerChoseHandler(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
