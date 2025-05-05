export default function EntryCard({ entry }) {
    return (
        
      <div className="p-4 border rounded shadow-sm">
        <div className="text-lg">{entry.date}</div>
        <div className="text-2xl">{ entry.mood.icon}</div> 
        <div className="text-sm mt-1">{entry.note}</div>
        <div className="flex items-center mt-2">
          <img src={entry.weather.icon} alt="weather" className="w-6 h-6 mr-1" />
          <span className="text-sm">{entry.weather.temp}°C - {entry.weather.description}</span>
        </div>
      </div>
    );
  }
  