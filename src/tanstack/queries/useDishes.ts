import { agent } from "@/api/agent";
import { Dish } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
}

export const QKDishes = "dishes";
const useDishes = ({ enabled }: Props) => {
  return useQuery({
    queryKey: [QKDishes],
    queryFn: () =>
      agent.get(`/dishes`).then(({ data: response }) => response as Dish[]),
    enabled,
  });
};

export default useDishes;
