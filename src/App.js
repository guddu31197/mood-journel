import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import MoodForm from "./components/MoodForm";
import CalendarView from "./components/CalendarView";
import { getWeatherData } from "./utils/weatherService";
import { format } from "date-fns";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem("moodEntries")) || []);
  const date = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const weatherData = await getWeatherData(latitude, longitude);
      setWeather(weatherData);
    });
  }, []);
  
  console.log("app data")
  const handleSaveEntry = ({ mood, note, weather }) => {
    const newEntry = {
      date,
      mood,
      note,
      weather,
    };
    const updatedEntries = [...entries, newEntry];
    localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));
    console.log(entries)
    setEntries(updatedEntries);
    alert("Mood entry saved!");
  };

  return (
    <div className="min-h-screen p-4 bg-white">
      <Header />
      <WeatherDisplay weather={weather} />
      <MoodForm onSave={handleSaveEntry} weather={weather} />
      <h2 className="text-xl font-semibold mt-6">All Entries</h2>
      <CalendarView entries={entries} />
    </div>
  );
}
