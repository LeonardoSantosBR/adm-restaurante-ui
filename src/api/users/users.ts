import type { IcreateUsers } from "../../types/users/create-users";
import { api } from "../api";

export function createUser(data: IcreateUsers) {
  return api.post("users", data);
}
