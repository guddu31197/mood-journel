import { format } from "date-fns";

export default function Header() {
  const today = format(new Date(), "yyyy-MM-dd");
  return <h1 className="text-2xl font-bold mb-4">Mood Journal - {today}</h1>;
}
