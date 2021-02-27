// Import needed components
import LikeButton from './like_button.js';

function InputField() { // This is a functional component
	return React.createElement(
		'div', // This is a div
		{className: 'InputField', style: {display: 'block'}}, // Pass in props, give class name, and styling
		React.createElement('input', {placeholder:"Insert some value here", type:"text"}), // Create an input
		React.createElement(LikeButton, {text: "Submit"}) // Reuse the LikeButton component
	);
}

export default InputField; // Allow other components to use this functional component
