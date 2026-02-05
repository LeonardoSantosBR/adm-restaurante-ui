import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrders } from "../../api/orders/orders";

export function useUpdateOrders() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { id: string; title: string; description: string, status: string }) =>
      updateOrders(params.id, { title: params.title, description: params.description, status: params.status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}