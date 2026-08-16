import './PortfolioPill.css';

/**
 * A pill component for the portfolio.
 * @param {Object} props - The properties for the PortfolioPill component.
 * @param {string} props.text - The text to display in the pill.
 * @param {string} props.image - The image to display in the pill.
 * @param {function} props.onClick - The function to call when the pill is clicked.
 * @param {string} props.variant - The variant of the pill.
 */
function PortfolioPill({ text, image, onClick, variant = null }) {
  return (
    <button
      className={`portfolio-pill ${onClick ? 'button' : ''} ${variant} body-base`}
      onClick={onClick}
    >
      <img src={image} alt="text" />
      {text}
    </button>
  );
}

export default PortfolioPill;