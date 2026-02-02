import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrders } from "../../api/orders/orders";

export function useDeleteOrders() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteOrders(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
