const moods = [
    { id: "happy", icon: "😊", color: "bg-yellow-200" },
    { id: "neutral", icon: "😐", color: "bg-gray-200" },
    { id: "sad", icon: "😢", color: "bg-blue-200" },
    { id: "angry", icon: "😠", color: "bg-red-200" },
    { id: "love", icon: "😍", color: "bg-pink-200" },
  ];
  
  export default function MoodSelector({ selectedMood, onSelect }) {
    return (
      <div className="flex space-x-2 mb-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onSelect(mood)}
            className={`text-3xl p-2 rounded-full ${selectedMood?.id === mood.id ? "ring-2 ring-black" : ""}`}
          >
            {mood.icon}
          </button>
        ))}
      </div>
    );
  }
  