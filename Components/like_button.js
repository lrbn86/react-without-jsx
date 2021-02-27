function LikeButton({ text }) { // This is a functional component.
	let button = React.createElement("button", {id: "like-button"}, text); // Create a simple button
	return button;
}

export default LikeButton; // Allow other components to use this component.
