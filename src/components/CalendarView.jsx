import EntryCard from "./EntryCard";

export default function CalendarView({ entries }) {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        
      {
      
      entries.map((entry, i) => (
        <EntryCard key={i} entry={entry} />
      ))}
      
    </div>
  );
}
