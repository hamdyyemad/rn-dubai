//
import { Link } from "react-router-dom";
export default function Info() {
  //
  return (
    <>
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">text</h4>
        <ul className="space-y-4">
          <li>
            <Link
              to="/#about"
              className="text-gray-300 hover:text-white text-sm"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#products"
              className="text-gray-300 hover:text-white text-sm"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/#contact"
              className="text-gray-300 hover:text-white text-sm"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
