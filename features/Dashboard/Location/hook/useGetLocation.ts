import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

const useGetLocation = () => {
  return useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/location");
      return response.data;
    },
  });
};

export default useGetLocation;
