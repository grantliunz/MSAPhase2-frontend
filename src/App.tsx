import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	// Declare a new state variable, which we'll call "cityName"
	const [cityName, setCityName] = useState("");

	return (
		<div>
			<h1>
				Weather app
			</h1>

			<div>
				<label>City Name</label><br />
				<input type="text" id="city-name" name="city-name" onChange={e => setCityName(e.target.value)} /><br />
				<button onClick={search}>
					Search
				</button>
			</div>

			<p>
				You have entered {cityName}
			</p>
		</div>
	);

	function search() {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3a7040e91d9af7048ae6f18454e40e0c&units=metric`).then((res) => {
			console.log(res.data);

		})
	}
}

export default App;