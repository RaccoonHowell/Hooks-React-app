import React from "react";
import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";

const App = () => (
	<>
		<Clicked />
		<Square color="blue" />
		<ToggleText initial="Hello" alternate="World" />
	</>
);

export default App;