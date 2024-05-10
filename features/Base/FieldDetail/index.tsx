"use client";

import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";

import useGetFieldDetails from "@/features/Dashboard/FieldDetail/hook/useGetFieldDetails";
import { formatIDR } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import BlurImage from "@/components/common/image-blur";

const FieldDetailsFeature = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading } = useGetFieldDetails(params.slug);

  if (isLoading) {
    return (
      <div className="mt-5 mb-20 container">
        <div className="w-80 h-5 animate-pulse bg-neutral-100" />
        <div className="mt-10 grid grid-cols-4 gap-5">
          <div className="w-full h-[420px] animate-pulse col-span-3 bg-neutral-100" />
          <div className="space-y-2">
            <div className="w-40 h-5 animate-pulse bg-neutral-100" />
            <div className="w-36 h-5 animate-pulse bg-neutral-100" />
          </div>
        </div>
        <div className="w-96 h-6 animate-pulse bg-neutral-100 mt-3" />
      </div>
    );
  }

  return (
    <main className="container mb-20">
      <Breadcrumb className="mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/field">Field</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{data?.data.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="space-y-4 mt-10">
        <h1 className="text-5xl font-bold">{data?.data.name}</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="relative w-full h-[420px] col-span-3">
            <BlurImage src={data?.data.image} alt={data?.data.name} />
          </div>
          <div className="space-y-2">
            <div className="text-lg">
              <p className="font-semibold">{data?.data.location.name}</p>
              <p className="text-base">{data?.data.address}</p>
            </div>
            <p>{formatIDR(parseInt(data?.data.price))}/ hours</p>
            <Button className="col-span-4" asChild>
              <a
                href={`https://wa.me/62895412528975?text=Halo%20saya%20ingin%20booking%20lapangan%20${data?.data.name}%20untuk%20hari%20ini.%20Apakah%20masih%20tersedia?`}
                target="_blank"
                rel="noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>
        </div>
        <p className="text-lg">{data?.data.description}</p>
      </section>
    </main>
  );
};

export default FieldDetailsFeature;
