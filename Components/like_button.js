function LikeButton({ text }) {
	let button = React.createElement("button", {id: "like-button"}, text);
	return button;
}

export default LikeButton;
