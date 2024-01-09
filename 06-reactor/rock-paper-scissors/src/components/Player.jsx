import PropTypes from "prop-types";
import { ChoiceType } from "./Choice";
import { useCallback } from "react";

const Player = ({ name, choice = {}, result }) => {
  const { pic = "🌀" } = choice;
  const status = useCallback(
    () =>
      result === "WON"
        ? "player--won"
        : result === "LOST"
        ? "player--lost"
        : "player--tie",
    [result]
  );

  return (
    <div className={`player ${status()}`}>
      <span className="player__choice">{pic}</span>
      <span className="player__choice_name">
        {choice.name ? choice.name : "Pls Choose"}
      </span>
      <span className="player__name">{name}</span>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  result: PropTypes.string,
  choice: PropTypes.shape(ChoiceType),
};

export default Player;
