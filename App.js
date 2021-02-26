import LikeButton from './Components/like_button.js';

function App() {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(LikeButton, {text: "Nice Button"}),
		React.createElement(LikeButton, {text: "Another Nice Button"}),
		React.createElement(LikeButton, {text: "Cool Button"})
	);
}

export default App;
