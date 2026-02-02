import { useDeleteOrders } from "../../../hooks/orders/use-delete-orders";
import type { DeleteOrdersModalProps } from "../../../types/orders/Tdelete-orders-modals";

export function DeleteOrdersModal({ open, orderId, onClose }: DeleteOrdersModalProps) {
  const { mutate, isPending } = useDeleteOrders();

  if (!open) return null;

  function handleDelete() {
    if (!orderId) return;
    mutate(orderId, {
      onSuccess: () => onClose(),
    });
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close delete modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-default"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-[660px] max-w-full bg-white border border-[#CCCCCC] rounded-[16px] p-6">
          <h2 className="text-[18px] font-semibold text-black">
            Tem certeza que deseja excluir esse pedido?
          </h2>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] border border-[#CCCCCC] bg-white text-[14px]"
            >
              Cancelar
            </button>

            <button
              onClick={handleDelete}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] bg-[#FF5151] text-white text-[14px] font-medium disabled:opacity-70"
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}