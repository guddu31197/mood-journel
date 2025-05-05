import { useState } from "react";
import MoodSelector from "./MoodSelector";

export default function MoodForm({ onSave, weather }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!selectedMood || note.trim() === "") {
      alert("Select a mood and enter a note.");
      return;
    }
    onSave({ mood: selectedMood, note, weather });
    
    setNote("");
  };

  return (
    <>
      <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
      <textarea
        className="w-1/3 p-2 border rounded mb-4"
        placeholder="Write something about your day..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Entry
      </button>
    </>
  );
}
