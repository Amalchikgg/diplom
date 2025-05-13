import { agent } from "@/api/agent";
import { useMutation } from "@tanstack/react-query";
import React from "react";

interface Props {
  phone: string;
}

const usePasswordResetRequest = () => {
  return useMutation({
    mutationKey: ["passwordResetRequest"],
    mutationFn: (body: Props) =>
      agent.post("/auth/password-reset/request", body),
  });
};

export default usePasswordResetRequest;
