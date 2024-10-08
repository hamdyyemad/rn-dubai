import { Link } from "react-router-dom";
export default function Copyrights() {
  return (
    <>
      <p className="text-gray-300 text-sm mt-10">
        © 2024
        <Link to="/" className="hover:underline mx-1">
          Electrogroup
        </Link>
        All Rights Reserved.
      </p>
    </>
  );
}
