import { agent } from "@/api/agent";
import { Address, Category } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
}

export const QKCategories = "categories";
const useCategories = ({ enabled }: Props) => {
  return useQuery({
    queryKey: [QKCategories],
    queryFn: () =>
      agent
        .get(`/categories`)
        .then(({ data: response }) => response as Category[]),
    enabled,
  });
};

export default useCategories;
