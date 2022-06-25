import { helperFormatPercent, helperFotmatMoney } from "../../helpers";
import ColoredValue from "../ColoredValue";

export default function Title({ description, value, percent }) {
  return (
    <>
      <h1 className="text-center font-semibold text-xl">{description}</h1>
      <h2 className="text-center font-semibold text-lg">
        <ColoredValue value={value}>
          Rendimento Total: {helperFotmatMoney(value)} (
          {helperFormatPercent(percent)})
        </ColoredValue>
      </h2>
    </>
  );
}
