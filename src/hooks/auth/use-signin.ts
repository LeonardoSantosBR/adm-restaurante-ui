import { useMutation } from "@tanstack/react-query";
import { signin } from "../../api/auth/auth";

export function useSignin() {
  return useMutation({
    mutationFn: signin
  });
}