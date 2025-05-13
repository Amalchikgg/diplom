import { agent } from "@/api/agent";
import { Address, Category, Restaurant } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  id: string;
}

export const QKRestaurant = "restaurant";
const useRestaurant = ({ enabled, id }: Props) => {
  return useQuery({
    queryKey: [QKRestaurant, id],

    queryFn: () =>
      agent
        .get(`/restaurants/${id}`)
        .then(({ data: response }) => response as Restaurant),
    enabled,
  });
};

export default useRestaurant;
