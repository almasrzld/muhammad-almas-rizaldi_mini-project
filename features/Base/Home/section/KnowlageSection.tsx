import React from "react";

const KnowlageSection = () => {
  return (
    <section className="bg-[#E56E00]/30 rounded-b-[60px] md:rounded-b-[100px] py-10 md:py-20 mb-10">
      <div className="container flex items-center flex-col gap-5 md:gap-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center w-full md:w-8/12 font-bold leading-tight">
          Well maintained <span className="text-primary">field.</span> Modern{" "}
          <span className="text-primary">technology.</span> Fair{" "}
          <span className="text-primary">referee.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center">
          Alcabris Soccer is a futsal field rental website with full services.
          With local professionals and advanced technology, we provide services
          ranging from recording, rental, refereeing, to maintenance.
          Additionally, we offer industry-leading financial protection that
          eliminates your risk with guaranteed rental payments of 50% of the
          rental price.
        </p>
      </div>
    </section>
  );
};

export default KnowlageSection;
