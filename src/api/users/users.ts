import { api } from "../api";
import type { IcreateUsers } from "../../types/users/icreate-users";

export function createUser(data: IcreateUsers) {
  return api.post("users", data);
}
