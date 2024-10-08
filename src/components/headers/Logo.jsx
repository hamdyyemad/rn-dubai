import { Link } from "react-router-dom";
export default function Logo({ cssStyles }) {
  return (
    <Link to="/#home" className={cssStyles}>
      RN-Dubai
    </Link>
  );
}
