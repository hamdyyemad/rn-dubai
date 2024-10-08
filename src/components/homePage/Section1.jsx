const paragraphs = [
  "ONI FOODS OVERSEAS, established in 2015, specializes in the import and export of frozen products sourced from diverse regions across the globe. Our foundation rests upon a commitment to delivering exceptional quality and service to our clientele.",
  "Thanks to the dedication of our proficient team, we have cultivated a robust presence in multiple markets where we cater to the needs of our customers.",
  "We prioritize meticulous attention to detail to uphold the superior quality of the products we offer. Through regular inspections conducted throughout the year, we ensure that only the finest products reach our customers, thereby maintaining their trust and satisfaction.",
  "Timeliness is of the essence in our operations. We diligently ensure that every shipment reaches our clients according to the agreed-upon schedule. Our logistics department operates with precision, meticulously overseeing each order to guarantee punctual delivery in the specified manner. We take immense pride in the efficiency of our logistical processes, acknowledging the tireless efforts of our team in accomplishing each operation successfully.",
  "With a steadfast commitment to excellence, ONI FOODS OVERSEAS continues to uphold its reputation as a trusted provider of premium frozen products, striving to exceed expectations at every turn.",
];
export default function Section1() {
  return (
    <section
      id="about"
      className="relative h-full overflow-hidden bg-cover bg-center pb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/cover.png')`, // Add a gradient overlay with opacity

        backgroundAttachment: "fixed", // Fix the background image
      }}
    >
      <div className="md:static xl:static 2xl:static inset-x-1/2	md:inset-0 flex justify-center items-center mt-24">
        <div className="bg-[#001F47] text-[#f0ebec] p-16 md:p-20 rounded-2xl shadow-lg max-w-md  md:max-w-2xl lg:max-w-4xl mt-10 mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-4">
            The Strength of a Big Group
          </h2>
          <h5 className="text-lg text-center mb-4">Since 2015</h5>
          <div className="text-base  text-left  space-y-6 w-full flex flex-col break-words	">
            {paragraphs.map((el, i) => (
              <p key={`paragraph-${i}`}>{el}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
