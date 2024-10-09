export default function News() {
  return (
    <section className="pt-24">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 bg-white">
        <img
          className="w-full "
          src="https://www.onifoods.com/wp-content/uploads/go-x/u/1ba823f7-7f0c-45aa-9451-151f49756ed5/l122,t0,w835,h661/image-480x380.png"
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Meeting of our CEO with the President of Andalusian Region, in
            Cairo.
          </h2>
          <p className="mb-6 font-light text-gray-600 md:text-lg">
            CANAL SUR MEDIA | 18 noviembre 2022
          </p>
          <p className="mb-6 font-light text-gray-800 md:text-lg">
            {
              "The President of the Junta highlights the good export data of Andalusia, which will break records at the end of the year. This Friday marks the end of the President's trip to Egypt, where he participated in the Climate Summit and held meetings with potential investors in Andalusia. Juanma Moreno has met with businessmen and representatives of the culture of that country in Cairo."
            }
          </p>
        </div>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 bg-[#001F47]">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-100 ">
            Meeting of our CEO with the President of Andalusian Region, in
            Cairo.
          </h2>
          <p className="mb-6 font-light text-gray-300 md:text-lg">
            CANAL SUR MEDIA | 18 noviembre 2022
          </p>
          <p className="mb-6 font-light text-gray-200 md:text-lg">
            {
              "The President of the Junta highlights the good export data of Andalusia, which will break records at the end of the year. This Friday marks the end of the President's trip to Egypt, where he participated in the Climate Summit and held meetings with potential investors in Andalusia. Juanma Moreno has met with businessmen and representatives of the culture of that country in Cairo."
            }
          </p>
        </div>
        <img
          className="w-full "
          src="https://www.onifoods.com/wp-content/uploads/go-x/u/1ba823f7-7f0c-45aa-9451-151f49756ed5/l122,t0,w835,h661/image-480x380.png"
          alt="dashboard image"
        />
      </div>
    </section>
  );
}
