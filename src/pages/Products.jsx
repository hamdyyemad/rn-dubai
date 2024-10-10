import { Helmet, HelmetProvider } from "react-helmet-async";
import { seaProducts, meatAndPoultryProducts } from "../data/products.js";

export default function Products() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Our Products | RN Dubai</title>
          <meta
            name="description"
            content="Explore the wide range of premium food and beverage products offered by ROWAD ALNAJAH. We ensure the highest quality, safety, and freshness in every product."
          />
          <meta
            name="keywords"
            content="RN Dubai, Products, ROWAD ALNAJAH, food and beverage products, premium quality, fresh food, Dubai food trading"
          />
          <meta
            name="author"
            content="ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
          />
          <meta
            property="og:title"
            content="Our Products | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
          />
          <meta
            property="og:description"
            content="Browse the premium food and beverage products offered by ROWAD ALNAJAH, ensuring freshness, safety, and quality."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://rn-dubai2.vercel.app/products"
          />
        </Helmet>
      </HelmetProvider>
      <section className="my-8">
        <div className="h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-3xl font-bold">Our Products</h2>
          </div>
          <div className="mb-5">
            <div
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background: "url(/assets/home/products/3.jpg) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                Fish
              </h2>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {seaProducts?.map((el) => (
              <div
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                key={el?.id}
              >
                <img
                  src={el?.image}
                  alt={el?.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{el.name}</h3>
                  <span className="text-gray-500 mt-2">{el?.short} </span>
                  <span className="text-gray-500 mt-2">{el?.rating} / 5</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <div
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background: "url(/assets/home/products/1.jpg) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                Meat & Poultry
              </h2>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {meatAndPoultryProducts?.map((el) => (
              <div
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                key={el?.id}
              >
                <img
                  src={el?.image}
                  alt={el?.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{el.name}</h3>
                  <span className="text-gray-500 mt-2">{el?.short} </span>
                  <span className="text-gray-500 mt-2">{el?.rating} / 5</span>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mb-3">
            <h1 className="text-3xl font-bold">Yesterday</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              WEDNESDAY 5 AUGUST
            </p>
          </div>
          <div className="flex -mx-1 mb-5">
            <div className="w-1/2 px-1">
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  DJ Dan Spins The Wheels
                </h3>
              </Link>
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Top Travels Destinations For 2020
                </h3>
              </Link>
            </div>
            <div className="w-1/2 px-1">
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  M&S Launches New Makeup Range!
                </h3>
              </Link>
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  APT Set To Be A&nbsp;Ripper
                </h3>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
