"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { formatIDR } from "@/lib/utils";
import useGetField from "@/features/Dashboard/Field/hook/useGetField";
import useGetLocation from "@/features/Dashboard/Location/hook/useGetLocation";
import { ILocationSchema } from "@/features/Dashboard/Location/hook";
import { IFieldSchema } from "@/features/Dashboard/Field/hook";
import BlurImage from "@/components/common/image-blur";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFieldFeature from "./hook";

const FieldFeature = () => {
  const {
    page,
    setPage,
    limit,
    search,
    setSearch,
    value,
    location,
    setLocation,
  } = useFieldFeature();

  const { data, isLoading } = useGetField(page, limit, value, location);
  const { data: dataLocation, isLoading: isLoadingLocation } = useGetLocation();

  return (
    <main className="container">
      <section className="my-10 space-y-2">
        <h1 className="text-5xl font-bold text-center">
          Futsal <span className="text-[#E56E00]">Field</span>
        </h1>
        <h2 className="text-center text-2xl">
          Reserve now and play with your friends. Play with sportsmanship!
        </h2>
      </section>
      <section className="mb-5">
        <div className="flex items-center justify-between">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Field"
            className="w-[300px]"
          />
          <Select onValueChange={setLocation} value={location}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Location</SelectLabel>
                {isLoadingLocation ? (
                  <SelectItem value="loading">Loading...</SelectItem>
                ) : (
                  <>
                    {dataLocation?.data.map((item: ILocationSchema) => (
                      <SelectItem key={item.id} value={item.id || ""}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10 mb-10">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border bg-white rounded-lg p-2">
                <div className="animate-pulse h-80 bg-gray-300 rounded-lg" />
                <div className="space-y-1 mt-2">
                  <div className="h-5 bg-gray-300 w-1/2 rounded-sm" />
                  <div className="h-3 bg-gray-300 w-full rounded-sm" />
                  <div className="h-3 bg-gray-300 w-full rounded-sm" />
                </div>
              </div>
            ))
          ) : data?.data.results.length > 0 ? (
            data?.data.results.map((item: IFieldSchema) => (
              <div
                key={item.id}
                className="relative group border bg-white rounded-lg transition-all p-2"
              >
                <div className="relative h-80">
                  <BlurImage src={item.image} alt={item.name} />
                  <div className="absolute top-0 left-0 rounded-lg bg-orange-400/30 w-full h-full group-hover:bg-transparent transition-colors" />
                </div>
                <div className="space-y-1 mt-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.location.name}</p>
                  <p className="line-clamp-1 text-sm">{item.description}</p>
                  <p>{formatIDR(parseInt(item.price))}/ hours</p>
                </div>
                <Button className="mt-2" asChild>
                  <Link href={`/field/${item.slug}`}>See Details</Link>
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center col-span-4">No data found</div>
          )}
        </div>
        {data?.data.totalPages > 1 && (
          <div className="flex items-center justify-between">
            <Button
              disabled={data?.data.currentPage === 1 || isLoading}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <p>Previous Page</p>
            </Button>
            <Button
              disabled={data?.data.totalPages === page || isLoading}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              <p>Next Page</p>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};

export default FieldFeature;
