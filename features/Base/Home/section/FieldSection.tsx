"use client";
import FieldCard from "@/components/common/field-card";
import SkeletonFieldCard from "@/components/common/skeleton-field-card";
import { Button } from "@/components/ui/button";
import { IFieldSchema } from "@/features/Dashboard/Field/hook";
import useGetField from "@/features/Dashboard/Field/hook/useGetField";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const FieldSection = () => {
  const { data, isLoading } = useGetField(1, 4, "", "");
  const buttonRef = useRef(null);

  useEffect(() => {
    const currentSection = buttonRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="container my-8 sm:my-12 md:my-20">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 md:mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-[#E56E00]">Most</span> Popular
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <SkeletonFieldCard />
        ) : (
          data?.data.results.map((item: IFieldSchema, index: number) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
            >
              <FieldCard item={item} />
            </div>
          ))
        )}
      </div>
      <div
        ref={buttonRef}
        className="mt-2 md:mt-5 flex items-center justify-end slide-button-right"
      >
        <Button asChild>
          <Link href="/field">See more</Link>
        </Button>
      </div>
    </section>
  );
};

export default FieldSection;
