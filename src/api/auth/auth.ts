import { api } from "../api";
import type { Isignin } from "../../types/auth/Isignin";

export function signin(data: Isignin) {
  return api.post("auth", data);
}
