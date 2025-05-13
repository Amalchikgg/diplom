import { useQuery } from "@tanstack/react-query";
import { agent } from "../../api/agent";
import { User } from "@/types/ApiTypes";

export const QKUser = "user";

const useUser = () =>
  useQuery({
    queryKey: [QKUser],
    queryFn: () =>
      agent
        .get("/users/profile")
        .then(({ data: response }) => response as User),
  });

export default useUser;
