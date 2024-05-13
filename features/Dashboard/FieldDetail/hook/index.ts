"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

import { axiosInstanceToken } from "@/lib/axios";
import useGetFieldDetails from "./useGetFieldDetails";

const useDashboardFieldDetailsFeature = (slug: string) => {
  const router = useRouter();

  const { data, isLoading } = useGetFieldDetails(slug);

  const { mutate: deleteField } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstanceToken.delete(
        `/v1/api/field/${data?.data?.id}`
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/dashboard/field");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return {
    router,
    data,
    isLoading,
    deleteField,
  };
};

export default useDashboardFieldDetailsFeature;
