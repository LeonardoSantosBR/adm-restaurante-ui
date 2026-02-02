import { useState } from "react";
import { useCreateOrders } from "../../hooks/orders/use-create-orders";

/**
 *
 * @description responsavel por renderizar componente de criação do pedido
 */
export function CreateOrders() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate, isPending } = useCreateOrders();

  const disabled = !title;

  function handleCreate() {
    mutate({
      title,
      description,
      status: "IN_PROGRESS"
    });
  }

  return (
    <div className="bg-white border border-[#cccccc] rounded-[16px] p-8">
      <h1 className="text-[22px] font-bold mb-4">Qual será o próximo pedido?</h1>

      <div className="pb-3">
        <label className="text-lg">Título</label>
        <input
          value={title}
          placeholder="pizza..."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-[#cccccc] rounded-xl p-3 mb-3"
        />
      </div>

      <div>
        <label className="text-lg">Descrição</label>
        <textarea
          value={description}
          placeholder="descrição aqui"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-[#cccccc] rounded-xl p-3 h-[80px]"
        />
      </div>

      <div className="flex justify-end mt-3">
        <button
          disabled={disabled || isPending}
          onClick={handleCreate}
          className={`px-4 py-2 rounded text-white ${
            disabled ? "bg-gray-400" : "bg-[#7695EC]"
          }`}
        >
          Criar
        </button>
      </div>
    </div>
  );
}
