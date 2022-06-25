export default function ColoredValue({ children, value }) {
  const color = `${
    value > 0 ? "text-green-500" : value < 0 && "text-red-500"
  } font-semibold`;
  return <span className={color}>{children}</span>;
}
