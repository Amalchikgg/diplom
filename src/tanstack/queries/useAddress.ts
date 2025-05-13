import { agent } from "@/api/agent";
import { Address } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  id: string;
}

export const QKAddress = "address";
const useAddress = ({ enabled, id }: Props) => {
  return useQuery({
    queryKey: [QKAddress, id],

    queryFn: () =>
      agent
        .get(`/addresses/${id}`)
        .then(({ data: response }) => response as Address),
    enabled,
  });
};

export default useAddress;
