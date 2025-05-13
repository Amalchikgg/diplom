import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QKAddresses } from "../queries/useAddresses";
import { QKAddress } from "../queries/useAddress";

const useDeleteAddress = (id: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["deleteAddress"],
    mutationFn: () => agent.delete(`/addresses/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKAddresses] });
      client.invalidateQueries({ queryKey: [QKAddress] });
    },
  });
};

export default useDeleteAddress;
