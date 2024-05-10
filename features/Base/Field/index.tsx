"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import useGetField from "@/features/Dashboard/Field/hook/useGetField";
import useGetLocation from "@/features/Dashboard/Location/hook/useGetLocation";
import { ILocationSchema } from "@/features/Dashboard/Location/hook";
import { IFieldSchema } from "@/features/Dashboard/Field/hook";
import FieldCard from "@/components/common/field-card";
import SkeletonFieldCard from "@/components/common/skeleton-field-card";
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
      <section className="my-6 md:my-10 space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Futsal <span className="text-[#E56E00]">Field</span>
        </h1>
        <h2 className="text-center text-lg sm:text-xl md:text-2xl">
          Reserve now and play with your friends. Play with sportsmanship!
        </h2>
      </section>
      <section className="mb-5">
        <div className="flex md:flex-row flex-col items-center justify-between gap-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Field"
            className="w-full md:w-[300px]"
          />
          <Select onValueChange={setLocation} value={location}>
            <SelectTrigger className="w-full md:w-[180px]">
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
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-10 mb-10">
          {isLoading ? (
            <SkeletonFieldCard />
          ) : data?.data.results.length > 0 ? (
            data?.data.results.map((item: IFieldSchema) => (
              <FieldCard key={item.id} item={item} details />
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
