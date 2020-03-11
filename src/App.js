import React from "react";
import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import RollCall from "./RollCall";

const App = () => (
	<>
		<Clicked />
		<Square color="blue" />
		<ToggleText initial="Hello" alternate="World" />
		<Counter initial={ 50 } max={ 100 } />
		<StepCounter max={ 10 } step={ 5 } />
		<CatchMeIfYouCan jump={ 100 } />
		<RollCall names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
	</>
);

export default App;