import { agent } from "@/api/agent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QKUser } from "../queries/useUser";

interface Props {
  phone: string;
  password: string;
}

const LoginMutation = () => {
  const clinet = useQueryClient();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (body: Props) =>
      agent.post("/auth/login", body).then(({ data: response }) => {
        console.log(response.token);

        const token = response.access_token;
        localStorage.setItem("token", token);
      }),
    onSuccess: () => {
      clinet.invalidateQueries({ queryKey: [QKUser] });
    },
  });
};

export default LoginMutation;
