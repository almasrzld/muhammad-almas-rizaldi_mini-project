"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useGetLocation from "../../Location/hook/useGetLocation";

export const FieldSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3),
  slug: z.string().optional(),
  address: z.string().min(3),
  image: z.string().optional(),
  description: z.string().min(3),
  location: z.string().min(3),
  price: z.string().min(3),
});

export type IFieldSchema = z.infer<typeof FieldSchema>;

const useDashboardFieldAddFeature = () => {
  const router = useRouter();
  const [image, setImage] = useState<string>("");
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);

  const form = useForm<IFieldSchema>({
    resolver: zodResolver(FieldSchema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
      location: "",
      price: "",
    },
  });

  const { data, isLoading } = useGetLocation();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IFieldSchema) => {
      const response = await axiosInstanceToken.post("/v1/api/field", {
        ...data,
        slug: data.name.toLowerCase().replace(/\s/g, "-"),
        image,
      });

      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      form.reset();
      router.push("/dashboard/field");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const handleImageUpload = () => {
    setIsImageUpload(true);
  };

  return {
    form,
    data,
    isLoading,
    mutate,
    isPending,
    image,
    setImage,
    isImageUpload,
    setIsImageUpload,
    handleImageUpload,
  };
};

export default useDashboardFieldAddFeature;
