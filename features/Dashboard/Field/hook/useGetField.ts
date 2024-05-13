import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const useGetField = (
  page: number,
  limit: number,
  value: string,
  location: string
) => {
  return useQuery({
    queryKey: ["fields", page, limit, value, location],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/field", {
        params: {
          page,
          limit,
          search: value,
          location,
        },
      });

      return response.data;
    },
  });
};
export default useGetField;
