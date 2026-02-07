import { useEffect, useState } from "react";
import { HeaderOrders } from "../../components/header-orders/header-orders";
import { LoadingSpinner } from "../../components/loading-spinner/loading-spinner";
import { useGetOrders } from "../../hooks/orders/use-get-orders";
import { CreateOrders } from "../../components/orders/create-orders";
import { OrdersCard } from "../../components/orders/orders-card";
import type { OrdersProps } from "../../types/orders/Tcreate-orders-payload";
import { useQueryClient } from "@tanstack/react-query";

function Orders() {
  const queryClient = useQueryClient();
  const [pageSize, setPageSize] = useState(3);
  const token = localStorage.getItem("token");

  const { data: orders, isLoading } = useGetOrders(pageSize, token, {enabled: !!token});

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }, [token, pageSize, queryClient]);

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      <HeaderOrders />

      <main className="max-w-[800px] mx-auto mt-6 flex flex-col gap-6 pb-10">
        <CreateOrders />
        {orders
          ?.sort(
            (a: OrdersProps, b: OrdersProps) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((order: OrdersProps) => (
            <OrdersCard key={order.id} order={order} />
          ))}

        <div className="flex justify-center items-center mt-2 gap-2">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="h-[32px] px-2 rounded-[8px] border border-[#CCCCCC] bg-white disabled:opacity-50"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        {isLoading || !token && <LoadingSpinner />}
      </main>
    </div>
  );
}

export default Orders;
