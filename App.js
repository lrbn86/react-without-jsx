// Import the needed components
import LikeButton from './Components/like_button.js';
import InputField from './Components/input_field.js';

function App() { // App is a functional component and its where everything comes together.
	return React.createElement( // This component returns a React element with nested components
		React.Fragment, // React.Fragment allows us to insert into DOM without having to use div
		null, // There are no props to be passed to React.Fragment.
		React.createElement(LikeButton, {text: "Nice Button"}), // This is a nested component LikeButton with props passed into it.
		React.createElement(LikeButton, {text: "Another Nice Button"}),
		React.createElement(LikeButton, {text: "Cool Button"}),
		React.createElement(LikeButton, {text: "Good Button"}),
		React.createElement(InputField), // Another nested component without any props passed.
		React.createElement(InputField),
		React.createElement(InputField)
	);
}

export default App; // Make sure that App.js is referenced in the script tag with type=module
