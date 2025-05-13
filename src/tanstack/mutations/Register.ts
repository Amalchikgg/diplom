import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QKUser } from "../queries/useUser";

interface Props {
  phone: string;
  password: string;
}
const RegisterMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (body: Props) =>
      agent.post("/auth/register", body).then(({ data: response }) => {
        console.log("response", response.access_token);

        const token = response.access_token;

        localStorage.setItem("token", token);
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QKUser] });
    },
  });
};

export default RegisterMutation;
