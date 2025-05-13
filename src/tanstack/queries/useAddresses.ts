import { agent } from "@/api/agent";
import { Address } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
}

export const QKAddresses = "addresses";
const useAddresses = ({ enabled }: Props) => {
  return useQuery({
    queryKey: [QKAddresses],
    queryFn: () =>
      agent
        .get(`/addresses/`)
        .then(({ data: response }) => response as Address[]),
    enabled,
  });
};

export default useAddresses;
