import { agent } from "@/api/agent";
import { Address, Category, Restaurant } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  id: string;
}

export const QKCategory = "category";
const useCategory = ({ enabled, id }: Props) => {
  return useQuery({
    queryKey: [QKCategory, id],

    queryFn: () =>
      agent
        .get(`/categories/${id}/restaurants`)
        .then(({ data: response }) => response as Restaurant[]),
    enabled,
  });
};

export default useCategory;
