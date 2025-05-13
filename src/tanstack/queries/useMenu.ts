import { agent } from "@/api/agent";
import { Address, Category, Menu, Restaurant } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  id: string;
}

export const QKMenu = "menu";
const useMenu = ({ enabled, id }: Props) => {
  return useQuery({
    queryKey: [QKMenu, id],

    queryFn: () =>
      agent
        .get(`/menus/by-restaurant/${id}`)
        .then(({ data: response }) => response as Menu[]),
    enabled,
  });
};

export default useMenu;
