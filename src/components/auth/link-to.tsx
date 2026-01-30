import { Link } from "react-router-dom";

function LinkTo({ text, component }: { text: string; component: string }) {
  return (
    <Link
      to={`/${component}`}
      className="text-sm text-black underline underline-offset-4"
    >
      {text}
    </Link>
  );
}

export default LinkTo;
