import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QKAddresses } from "../queries/useAddresses";
import { QKAddress } from "../queries/useAddress";
import { QKUser } from "../queries/useUser";

interface Props {
  name: string;
  gender: string;
  birth_date: string;
  phone: string;
}

const useUpdateProfile = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: (body: Props) => agent.put(`/users/profile/update`, body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKUser] });
    },
  });
};

export default useUpdateProfile;
