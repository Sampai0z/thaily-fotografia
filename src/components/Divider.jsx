import c from "../styles/components/Divider.module.css";
import PropTypes from "prop-types";

export default function Divider(props) {
  return (
    <div className={c.titleworks}>
      <hr />
      <span> {props.text} </span>
      <hr />
    </div>
  );
}

Divider.propTypes = {
  text: PropTypes.string.isRequired,
};
