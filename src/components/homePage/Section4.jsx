const data = [
  {
    title: "Attitude",
    paragrpah:
      "A positive and proactive mindset that drives us to overcome challenges, embrace change, and deliver exceptional results, fostering a culture of growth, innovation, and success.",
  },
  {
    title: "Knowledge",
    paragrpah:
      "A commitment to continuous learning, expertise, and staying up-to-date with industry trends, allowing us to provide innovative solutions and deliver high-quality services to our clients.",
  },
  {
    title: "Commitment",
    paragrpah:
      "A Unwavering dedication and loyalty to our goals, clients, and team, ensuring we consistently deliver on promises and surpass expectations, fostering trust and long-term relationships.",
  },
  {
    title: "Quality",
    paragrpah:
      "Relentless pursuit of excellence,  prioritizing customer satisfaction and consistently strive to improve and innovate to maintain the highest standards of quality.",
  },
];
export default function Section4() {
  return (
    <section className="py-10 px-5 md:p-32 bg-[#001F47]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col py-2 text-white mb-10">
        <h4 className="text-6xl font-medium text-center mb-8">Our Values</h4>
        <h5 className="text-3xl font-medium text-center mb-8">
          What defines Us
        </h5>
      </div>
      <div className="grid gap-8 mt-10 grid-cols-1 md:grid-cols-2 text-white">
        {data?.map((el, i) => (
          <div
            className="px-6 py-8 overflow-hidden rounded-md "
            key={`${el.title} ${i}`}
          >
            <h2 className="text-3xl font-medium text-center">{el.title}</h2>
            <p className="max-w-md mt-4 text-gray-200 text-center mx-auto">
              {el.paragrpah}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
