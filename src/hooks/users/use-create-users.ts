import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/users/users";

export function useCreateUsers() {
  return useMutation({
    mutationFn: createUser
  });
}