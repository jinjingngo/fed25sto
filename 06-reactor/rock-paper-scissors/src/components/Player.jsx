import PropTypes from "prop-types";
import { ChoiceType } from "./Choice";

const Player = ({ name, choice = {} }) => {
  const { pic = "🌀" } = choice;

  return (
    <div className="player player--tie">
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
  win: PropTypes.string,
  choice: PropTypes.shape(ChoiceType),
};

export default Player;
