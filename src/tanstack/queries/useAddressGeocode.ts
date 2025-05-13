import { agent } from "@/api/agent";
import { AddressSearch } from "@/types/ApiTypes";
import { useQuery } from "@tanstack/react-query";

interface Props {
  enabled: boolean;
  address: string;
}

export const QKGeocodeAddress = "geocodeAddress";
const useAddressesGeocode = ({ enabled, address }: Props) => {
  return useQuery({
    queryKey: [QKGeocodeAddress, address],
    queryFn: () =>
      agent
        .get(`/addresses/geocode`, { params: { address } })
        .then(({ data: response }) => response as AddressSearch[]),
    enabled,
  });
};

export default useAddressesGeocode;
