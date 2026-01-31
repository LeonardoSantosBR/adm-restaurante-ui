import type { Isignin } from "../../types/auth/isignin";
import { api } from "../api";

export function signin(data: Isignin) {
  return api.post("auth", data);
}
