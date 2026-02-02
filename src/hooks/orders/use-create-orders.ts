import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrders } from "../../api/orders/orders";

export function useCreateOrders() {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrders,
    onSuccess: ()=> {
      queryClient.invalidateQueries({ queryKey: ["orders"]});
    }
  });
}