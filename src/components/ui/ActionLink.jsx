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
function ActionLink({ href, text, image, title, variant }) {
    
    // Determine the classes to apply based on the variant and whether text is provided
    const classes = [
        "action-link subheading",
        variant === "accent" && "action-link-accent",
        variant === "outline" && "action-link-outline",
        !text && "action-link-icon-only",
    ].filter(Boolean).join(" ");
    
    return(
        <div className="action-link-wrapper">
            <a href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
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