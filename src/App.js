import React from "react";
import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";
import CatchMeIfYouCan from "./CatchMeIfYouCan";

const App = () => (
	<>
		<Clicked />
		<Square color="blue" />
		<ToggleText initial="Hello" alternate="World" />
		<Counter initial={ 50 } max={ 100 } />
		<StepCounter max={ 10 } step={ 5 } />
		<CatchMeIfYouCan jump={ 100 } />
	</>
);

export default App;