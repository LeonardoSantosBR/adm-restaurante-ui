import editIcon from "../../assets/icons/bx_bx-edit.png";
import deleteIcon from "../../assets/icons/ic_baseline-delete-forever.png";
import { useState } from "react";
import { DeleteOrdersModal } from "../modals/orders/delete-orders-modal";
import { EditOrdersModal } from "../modals/orders/edit-orders-modal";
import type { IUpdateOrders } from "../../types/orders/Iupdate-orders";

/**
 *
 * @description responsavel por renderizar cada componente de um pedido
 * @params recebe a publicação, sendo tipada por Order
 * @modals renderiza 2 modais de editar/excluir
 */
export function OrdersCard({ order }: { order: IUpdateOrders }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="bg-white border border-[#cccccc] rounded-[16px] overflow-hidden">
      <div className="bg-[#000000] px-4 py-3 flex justify-between">
        <h3 className="text-amber-300 font-semibold">{order.title}</h3>

        <div className="flex gap-3">
          <button onClick={() => setOpenDelete(true)}>
            <img src={deleteIcon} alt="Delete post" className="w-6 h-6" />
          </button>
          <button onClick={() => setOpenEdit(true)}>
            <img src={editIcon} alt="Edit post" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-md mb-3 font-semibold mr-2">NÚMERO DO PEDIDO:</p>
            <p className="text-red-600 font-extrabold">{order.orderNumber}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm  font-semibold mr-2">status:</p>
            <p className=" text-red-600 font-extrabold">{order.status === "IN_PROGRESS" ? "PREPARANDO" : "PRONTO"}</p>
          </div>
        </div>
        <p className="text-sm">{order.description}</p>
      </div>

      <DeleteOrdersModal
        open={openDelete}
        orderId={order.id}
        onClose={() => setOpenDelete(false)}
      />

      <EditOrdersModal
        open={openEdit}
        order={order}
        onClose={() => setOpenEdit(false)}
      />
    </div>
  );
}
