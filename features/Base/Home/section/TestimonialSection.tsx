import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  const TESTIMONIALS = [
    {
      name: "John Doe",
      image: "/images/testimoni-people.png",
      star: 5,
      comment: "“ The best futsal field I have ever rented. ”",
    },
    {
      name: "Jane Doe",
      image: "/images/testimoni-people.png",
      star: 4,
      comment:
        "“ Comfortable place, fast admin response, very trusted rental place, lots of choices, well maintained field, very modern technology, and very fair referee management. “",
    },
    {
      name: "John Doe",
      image: "/images/testimoni-people.png",
      star: 5,
      comment:
        "“ Clean, comfortable, reliable, just the best. You all must make a reservation on the Alcabris Soccer website! “",
    },
  ];

  return (
    <section className="container mt-10 mb-20">
      <h2 className="text-5xl text-center font-bold">Testimonial</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-20 md:gap-5 mt-24">
        {TESTIMONIALS.map((item, index) => (
          <div
            key={index}
            className="bg-[#242222] text-white rounded-[20px] relative p-5 shadow-md w-[300px] flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt="Testimonial people"
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-full absolute -top-14"
            />
            <div className="flex flex-col items-center justify-start gap-5 pt-14 h-60 md:h-72">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <div className="flex items-center gap-1">
                {[...Array(item.star)].map((_, index) => (
                  <StarFilledIcon
                    key={index}
                    className="w-5 h-5 text-primary"
                  />
                ))}
              </div>
              <p className="text-center text-sm lg:text-base">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
