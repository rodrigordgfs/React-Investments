import Reports from "../Reports";
import Title from "../../components/Title";

export default function Investment({ investment }) {
  const { description, totalValue, totalPercent, reports } = investment;
  return (
    <li className="border p-4 my-2">
      <Title
        description={description}
        value={totalValue}
        percent={totalPercent}
      />
      <Reports reports={reports} />
    </li>
  );
}
