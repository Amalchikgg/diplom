import { agent } from "@/api/agent";
import { Address, Category, Restaurant } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
}

export const QKRestaurants = "restaurants";
const useRestaurants = ({ enabled }: Props) => {
  return useQuery({
    queryKey: [QKRestaurants],
    queryFn: () =>
      agent
        .get(`/restaurants`)
        .then(({ data: response }) => response as Restaurant[]),
    enabled,
  });
};

export default useRestaurants;
