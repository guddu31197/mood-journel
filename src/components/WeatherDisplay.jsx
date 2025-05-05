export default function WeatherDisplay({ weather }) {
    if (!weather) return null;
    return (
      <div className="flex items-center mb-4">
        <img src={weather.icon} alt="weather" className="w-10 h-10 mr-2" />
        <span>{weather.temp}°C - {weather.description}</span>
      </div>
    );
  }
  