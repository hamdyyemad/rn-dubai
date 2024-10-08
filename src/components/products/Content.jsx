//
import ArabicData from "../../data/ar/translation.js";
import EnglishData from "../../data/en/translation.js";
import { Link } from "react-router-dom";
export default function Sticky({ id }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const data = currentLang === "ar" ? ArabicData[id - 1] : EnglishData[id - 1];
  console.log(data);
  return (
    <>
      {data.map((el, i) => (
        <div className="relative " key={`sticky-product${i + 1}`}>
          <div
            className={`sticky top-0 flex flex-col items-center justify-center w-full pb-20 ${
              i % 2 === 0 ? "bg-[#EAF0FC]" : "bg-white"
            }`}
          >
            <div className="overflow-hidden py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
                  <div className="lg:pr-8 lg:pt-4 ">
                    <div className="lg:max-w-lg text-gray-900 ">
                      <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl ">
                        {el.largeHeading}
                      </p>
                      <p
                        className={`mt-6 text-lg leading-8 ${
                          el?.isShowAll ?? "line-clamp-4"
                        } tracking-wider`}
                      >
                        {el.paragraph}
                      </p>
                      {el.restParagraph && (
                        <p className="mt-6 text-lg leading-8 line-clamp-3 tracking-wider text-[#adb5cd]">
                          {el.restParagraph}
                        </p>
                      )}
                      {el.readMore && (
                        <Link
                          to={`/products/${id}/${EnglishData[id - 1][
                            i
                          ].largeHeading
                            .split(" ")
                            .join("-")}${i}`}
                          className="inline-flex items-center justify-center py-2 text-base font-medium text-center text-[#fad22c] border rounded-md px-7 border-[#fad02c] hover:bg-[#fad02c] hover:text-white focus:outline-none focus:ring  focus:ring-[#fad02c] my-3"
                        >
                          {el.readMore}
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="relative md:w-[600px] md:h-[380px]">
                    <img
                      src={`/assets/products/product${id}/${i + 1}.jpg`}
                      alt={el.largeHeading}
                      className=" relative md:block rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 lg:flex object-cover w-[600px] h-[380px] mx-auto z-10"
                    />
                    <div
                      className=" z-0 absolute -left-4 md:block w-2/4 rounded-md shadow-xl h-3/4"
                      style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#fad02c",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
