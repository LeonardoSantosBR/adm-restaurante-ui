/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useUpdateOrders } from "../../../hooks/orders/use-update-orders";
import type { EditOrdersModalProps } from "../../../types/orders/Tedit-orders-modal";

export function EditOrdersModal({
  open,
  order,
  onClose,
}: EditOrdersModalProps) {
  const { mutate, isPending } = useUpdateOrders();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("IN_PROGRESS");

  useEffect(() => {
    if (!open || !order) return;
    setTitle(order.title);
    setDescription(order.description);
  }, [open, order]);

  if (!open) return null;
  const disabled = !title.trim() || !description.trim() || isPending;

  function handleSave() {
    if (!order) return;
    mutate(
      {
        id: order.id,
        title: title.trim(),
        description: description.trim(),
        status: status,
      },
      { onSuccess: () => onClose() }
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close edit modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-default"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-[660px] max-w-full bg-white border border-[#CCCCCC] rounded-[16px] p-6">
          <h2 className="text-[18px] font-semibold text-black">
            Editar Pedido
          </h2>

          <div className="mt-4">
            <label className="text-[14px] text-black">Título</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full h-[32px] px-3 border border-[#CCCCCC] rounded-[8px] text-[14px] focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-[14px] text-black">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full h-[80px] px-3 py-2 border border-[#CCCCCC] rounded-[8px] text-[14px] resize-none focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-[14px] text-black">Status: </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-[32px] px-2 rounded-[8px] border border-[#CCCCCC] bg-white disabled:opacity-50"
            >
              <option className="font-bold text-amber-300" value="IN_PROGRESS">
                PREPARANDO
              </option>
              <option className="font-bold text-amber-300" value="READY">
                FEITO
              </option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isPending}
              className="h-[32px] px-6 rounded-[8px] border border-[#CCCCCC] bg-white text-[14px]"
            >
              Cancelar
            </button>

            <button
              onClick={handleSave}
              disabled={disabled}
              className="h-[32px] px-6 rounded-[8px] bg-[#47B960] text-white text-[14px] font-medium disabled:opacity-70"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
