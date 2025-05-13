import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QKAddresses } from "../queries/useAddresses";
import { QKAddress } from "../queries/useAddress";

interface Props {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
}

const useUpdateAddress = (id: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["updateAddress"],
    mutationFn: (body: Props) => agent.put(`/addresses/${id}`, body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKAddresses] });
      client.invalidateQueries({ queryKey: [QKAddress] });
    },
  });
};

export default useUpdateAddress;
