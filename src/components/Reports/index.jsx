import {
  helperFormatMontYear,
  helperFormatPercent,
  helperFotmatMoney,
} from "../../helpers";
import ColoredValue from "../ColoredValue";

export default function Reports({ reports }) {
  return (
    <ul className="mt-8">
      {reports.map((report) => {
        const { id, month, year, value, percent } = report;
        return (
          <li key={id} className="flex flex-row items-center justify-between">
            <span className="font-mono">
              {helperFormatMontYear(month, year)}
            </span>
            <span className="flex-1 mx-4">
              <ColoredValue value={percent}>
                {helperFotmatMoney(value)}
              </ColoredValue>
            </span>
            <span>
              <ColoredValue value={percent}>
                {helperFormatPercent(percent)}
              </ColoredValue>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
