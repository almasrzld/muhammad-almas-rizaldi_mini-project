"use client";
import FieldCard from "@/components/common/field-card";
import SkeletonFieldCard from "@/components/common/skeleton-field-card";
import { Button } from "@/components/ui/button";
import { IFieldSchema } from "@/features/Dashboard/Field/hook";
import useGetField from "@/features/Dashboard/Field/hook/useGetField";
import Link from "next/link";
import React from "react";

const FieldSection = () => {
  const { data, isLoading } = useGetField(1, 4, "", "");

  return (
    <section className="container my-8 sm:my-12 md:my-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 md:mb-5">
        <span className="text-[#E56E00]">Most</span> Popular
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 ">
        {isLoading ? (
          <SkeletonFieldCard />
        ) : (
          data?.data.results.map((item: IFieldSchema) => (
            <FieldCard key={item.id} item={item} />
          ))
        )}
      </div>
      <div className="mt-2 md:mt-5 flex items-center justify-end">
        <Button asChild>
          <Link href="/field">See more</Link>
        </Button>
      </div>
    </section>
  );
};

export default FieldSection;
