import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

const useGetFieldDetails = (slug: string) => {
  return useQuery({
    queryKey: ["field", slug],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/field/${slug}`);
      return response.data;
    },
  });
};

export default useGetFieldDetails;
