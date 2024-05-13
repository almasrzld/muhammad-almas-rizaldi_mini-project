"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import { z } from "zod";

export const FieldSchema = z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  address: z.string(),
  description: z.string(),
  location: z.object({
    _id: z.string(),
    name: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  price: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
});

export type IFieldSchema = z.infer<typeof FieldSchema>;

const useDashboardFieldFeature = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);
  const [location, setLocation] = useState<string>("");

  return {
    page,
    setPage,
    limit,
    search,
    setSearch,
    value,
    location,
    setLocation,
  };
};

export default useDashboardFieldFeature;
