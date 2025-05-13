import { agent } from "@/api/agent";
import { AddressSearch } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  query: string;
}

export const QKSearchAddress = "searchAddress";

const useSearchAddresses = ({ enabled, query }: Props) => {
  return useQuery({
    queryKey: [QKSearchAddress, query],
    queryFn: () =>
      agent
        .get(`/addresses/suggestions/search`, { params: { query } })
        .then(({ data: response }) => response as AddressSearch[]),
    enabled,
  });
};

export default useSearchAddresses;
