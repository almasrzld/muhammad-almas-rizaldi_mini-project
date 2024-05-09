"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

import { formatIDR } from "@/lib/utils";
import ActionBack from "@/components/common/action-back";
import ActionDashboardDetail from "@/components/common/action-dashboard-detail";
import useDashboardFieldDetailsFeature from "./hook";

const DashboardFieldDetailsFeature = ({
  params,
}: {
  params: { slug: string };
}) => {
  const { router, data, isLoading, deleteField } =
    useDashboardFieldDetailsFeature(params.slug);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative">
      <div className="mr-12">
        <h1 className="font-bold text-2xl">{data?.data.name}</h1>
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="h-4 w-4" />
          <p>{data?.data.location.name}</p>
          <span>-</span>
          <p>{data?.data.address}</p>
        </div>
        <div className="relative mb-2 ">
          <Image
            src={data?.data.image}
            alt={data?.data.name}
            width={1248}
            height={1248}
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
        <p>{data?.data.description}</p>
        <div className="inline-flex gap-3">
          <p className="font-semibold">Price / Hours :</p>
          <p>{formatIDR(data?.data.price)}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 flex flex-col gap-2">
        <ActionBack href="/dashboard/field" />
        <ActionDashboardDetail
          editHandler={() => {
            router.push(`/dashboard/field/edit/${data?.data.slug}`);
          }}
          deleteHandler={() => {
            deleteField(data?.data?.id);
          }}
        />
      </div>
    </div>
  );
};

export default DashboardFieldDetailsFeature;
