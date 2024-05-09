"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "@/lib/axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useGetLocation from "./useGetLocation";

export const LocationSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3),
});

export type ILocationSchema = z.infer<typeof LocationSchema>;

const useDashboardLocationFeature = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDialogDelete, setIsDialogDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] =
    useState<ILocationSchema | null>(null);

  const form = useForm<ILocationSchema>({
    resolver: zodResolver(LocationSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (isEdit) {
      form.reset({
        name: selectedLocation?.name,
      });
    } else {
      form.reset({
        name: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, selectedLocation]);

  const { data, isLoading, refetch } = useGetLocation();

  const { mutate: addLocation, isPending: isAddLocationPending } = useMutation({
    mutationFn: async (data: ILocationSchema) => {
      const response = await axiosInstanceToken.post("/v1/api/location", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setIsDialogOpen(false);
      form.reset();
      refetch();
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const { mutate: updateLocation, isPending: isUpdateLocationPending } =
    useMutation({
      mutationFn: async (data: ILocationSchema) => {
        const response = await axiosInstanceToken.patch(
          `/v1/api/location/${selectedLocation?.id}`,
          data
        );
        return response.data;
      },
      onSuccess: (data) => {
        toast.success(data.message);
        setIsDialogOpen(false);
        form.reset();
        refetch();
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    });

  const { mutate: deleteLocation } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstanceToken.delete(
        `/v1/api/location/${id}`
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setIsDialogDelete(false);
      refetch();
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const handleAddDialog = () => {
    setIsEdit(false);
    setIsDialogOpen(true);
  };

  const handleEditDialog = (selectedData: ILocationSchema) => {
    setIsEdit(true);
    setSelectedLocation(selectedData);
    setIsDialogOpen(true);
  };

  const handleDeleteDialog = (selectedData: ILocationSchema) => {
    setSelectedLocation(selectedData);
    setIsDialogDelete(true);
  };

  return {
    isDialogOpen,
    isDialogDelete,
    isEdit,
    selectedLocation,
    setIsDialogOpen,
    setIsDialogDelete,
    form,
    isLoading,
    data,
    isAddLocationPending,
    handleAddDialog,
    handleEditDialog,
    handleDeleteDialog,
    addLocation,
    updateLocation,
    deleteLocation,
  };
};

export default useDashboardLocationFeature;
