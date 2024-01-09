import PropTypes from "prop-types";

const Choice = ({ pic, name, onChose }) => {
  return (
    <div onClick={onChose}>
      <span className="choice__pic">{pic}</span>
      <span className="choice__name">{name}</span>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const ChoiceType = {
  pic: PropTypes.string,
  name: PropTypes.string,
};

Choice.propTypes = {
  ...ChoiceType,
  onChose: PropTypes.func,
};

export default Choice;
