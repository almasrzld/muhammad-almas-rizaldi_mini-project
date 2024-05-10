"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

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
import useGetLocation from "../Location/hook/useGetLocation";
import { ILocationSchema } from "../Location/hook";
import useGetField from "./hook/useGetField";
import useDashboardFieldFeature, { IFieldSchema } from "./hook";

const DashboardFieldFeature = () => {
  const {
    page,
    setPage,
    limit,
    search,
    setSearch,
    value,
    location,
    setLocation,
  } = useDashboardFieldFeature();

  const { data, isLoading } = useGetField(page, limit, value, location);

  const { data: dataLocation, isLoading: isLoadingLocation } = useGetLocation();

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-3xl">Fields</h1>
        <Button size="sm" asChild>
          <Link href="/dashboard/field/add">Add Field</Link>
        </Button>
      </div>
      <div className="flex items-center justify-between mb-5">
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
      <div className="grid grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-60 w-full rounded-lg bg-gray-100 p-2 animate-pulse"
              >
                <div className="h-40 w-full bg-gray-200 rounded-lg m-auto" />
                <div className="h-7 w-1/2 bg-gray-200 flex items-start justify-start rounded-sm mt-2" />
                <div className="h-5 w-full bg-gray-200 flex items-start justify-start rounded-sm mt-1" />
              </div>
            ))
          : data?.data.results.map((field: IFieldSchema) => (
              <div key={field.id} className="border p-2 rounded-lg">
                <div className="relative h-52 group">
                  <Image
                    src={field.image}
                    alt={field.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="from-transparent transition-colors duration-300 bg-gradient-to-t group-hover:from-black to-transparent absolute inset-0 rounded-lg " />
                  <Link
                    href={`/dashboard/field/${field.slug}`}
                    className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-semibold opacity-0 group-hover:opacity-100"
                  >
                    Details
                  </Link>
                </div>
                <h2 className="font-semibold text-lg">{field.name}</h2>
                <p className="text-sm inline-flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {field.location.name}
                </p>
                <p className="text-sm line-clamp-2">{field.description}</p>
              </div>
            ))}
      </div>
      <div className="mt-5">
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
      </div>
    </div>
  );
};

export default DashboardFieldFeature;
