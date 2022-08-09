import { useState } from "react";
import axios from "axios";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function App() {
  // Declare a new state variable, which we'll call "cityName"
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState<undefined | any>(undefined);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Weather app</h1>

      <div>
        <TextField
          id="search-bar"
          className="text"
          value={cityName}
          onChange={(prop: any) => {
            setCityName(prop.target.value);
          }}
          label="Enter a City Name..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>
      <p>You have entered {cityName}</p>

      {weather === undefined ? (
        <p>City not found</p>
      ) : (
        <div
          style={{
            color: "blue",
            fontSize: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            {weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)}
          </p>
          <p>{weather.main.temp}°C</p>
          <p>Feels Like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );

  function search() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3a7040e91d9af7048ae6f18454e40e0c&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setWeather(undefined);
      });
  }
}

export default App;
