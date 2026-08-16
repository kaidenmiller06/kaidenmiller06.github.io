import './ActionLink.css';

import { useState, useRef } from 'react';

/**
 * An action link component that can be used to display a link with an image and text.
 * @param {Object} props - The properties for the ActionLink component.
 * @param {string} props.href - The URL to link to.
 * @param {string} props.text - The text to display in the action link.
 * @param {string} props.image - The URL of the image to display in the action link.
 * @param {string} props.variant - The variant of the action link (e.g., 'accent').
 * @param {string} props.title - The title to display in the action link.
 */
function ActionLink({ href, text, image, title, variant = null }) {
  return (
    <div className="action-link-wrapper">
      <a href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`action-link ${!text && 'action-link-icon-only'} ${variant} subheading`}
      >
        {image && <img src={image} alt="" />}
        {text && <p>{text}</p>}
      </a>
      {title && <span className={`action-link-tooltip body-base`}>
        {title}
      </span>}
    </div>
  );
}

export default ActionLink;