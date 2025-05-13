import { agent } from "@/api/agent";
import { Address, Category, Dish, Menu, Restaurant } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  id: string;
}

export const QKDishesByMenu = "dishesByMenu";
const useDishesByMenu = ({ enabled, id }: Props) => {
  return useQuery({
    queryKey: [QKDishesByMenu, id],

    queryFn: () =>
      agent
        .get(`/dishes/by-menu/${id}`)
        .then(({ data: response }) => response as Dish[]),
    enabled,
  });
};

export default useDishesByMenu;
