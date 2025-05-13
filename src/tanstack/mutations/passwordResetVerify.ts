import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QKUser } from "../queries/useUser";

interface Props {
  phone: string;
  reset_code: string;
  new_password: string;
}

const usePasswordResetVerify = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["passwordReseterify"],
    mutationFn: (body: Props) =>
      agent.post("/auth/password-reset/verify", body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKUser] });
    },
  });
};

export default usePasswordResetVerify;
