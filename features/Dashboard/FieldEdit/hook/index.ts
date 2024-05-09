"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { axiosInstanceToken } from "@/lib/axios";
import useGetFieldDetails from "../../FieldDetail/hook/useGetFieldDetails";
import useGetLocation from "../../Location/hook/useGetLocation";
import { FieldSchema, IFieldSchema } from "../../FieldAdd/hook";

const useDashboardFieldEditFeature = (slug: string) => {
  const router = useRouter();
  const [image, setImage] = useState<string>("");
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);

  const { data, isLoading } = useGetFieldDetails(slug);
  const { data: dataLocation, isLoading: dataLocationLoading } =
    useGetLocation();

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

  const { mutate: editField, isPending: editFieldPending } = useMutation({
    mutationFn: async (value: IFieldSchema) => {
      const response = await axiosInstanceToken.patch(
        `/v1/api/field/${data?.data?.id}`,
        {
          ...value,
          slug: data?.name?.toLowerCase().replace(/\s/g, "-"),
          image,
        }
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

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.data.name,
        address: data.data.address,
        description: data.data.description,
        location: data.data.location._id,
        price: data.data.price,
      });
      setImage(data.data.image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleImageUpload = () => {
    setIsImageUpload(true);
  };

  return {
    router,
    image,
    setImage,
    isImageUpload,
    setIsImageUpload,
    data,
    isLoading,
    dataLocation,
    dataLocationLoading,
    form,
    editField,
    editFieldPending,
    handleImageUpload,
  };
};

export default useDashboardFieldEditFeature;
