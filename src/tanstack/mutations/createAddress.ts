import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QKAddresses } from "../queries/useAddresses";

interface Props {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
}

const useCreateAddress = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["createAddress"],
    mutationFn: (body: Props) => agent.post("/addresses/", body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKAddresses] });
    },
  });
};

export default useCreateAddress;
