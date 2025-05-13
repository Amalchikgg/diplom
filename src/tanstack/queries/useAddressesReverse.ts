import { agent } from "@/api/agent";
import { AddressSearch } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  lat: number;
  lon: number;
}

export const QKReverseAddress = "reverseAddress";
const useSearchAddresses = ({ enabled, lat, lon }: Props) => {
  return useQuery({
    queryKey: [QKReverseAddress, lat, lon],
    queryFn: () =>
      agent
        .get(`/addresses/reverse`, { params: { lat, lon } })
        .then(({ data: response }) => response as AddressSearch[]),
    enabled,
  });
};

export default useSearchAddresses;
