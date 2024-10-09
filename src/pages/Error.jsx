import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Error() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <section className="m-auto pt-32 h-screen w-screen relative mb-10 bg-[#002e29]">
        <div className="flex flex-col py-2 text-white m-auto absolute inset-y-1/2 inset-x-0">
          <h4 className="text-6xl font-medium text-center mb-8">
            {error?.status ?? "404"} | Page Not Found
          </h4>
          <h5 className="text-xl font-medium text-center mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </h5>

          <Link
            to="/"
            className="mx-auto px-8 py-3 bg-[#1A2238] border border-current hover:bg-[#43D0C1] hover:bg-opacity-20"
          >
            Go Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
