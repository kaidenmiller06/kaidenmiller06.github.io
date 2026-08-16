import './SkillPill.css';

/**
 * A pill component for displaying a skill.
 * @param {Object} props - The properties for the SkillPill component.
 * @param {string} props.text - The text to display in the pill.
 * @param {string} props.image - The image to display in the pill.
 * @param {string} props.variant - The variant of the pill.
 */
function SkillPill({ text, image, variant = null }) {
  return (
    <div className={`skill-pill ${variant} body-bullet`}>
      <img src={image} alt={text} />
      {text}
    </div>
  );
}

export default SkillPill;