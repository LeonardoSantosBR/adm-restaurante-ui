import { useEffect, useState } from "react";
import { HeaderOrders } from "../../components/header-orders/header-orders";
import { LoadingSpinner } from "../../components/loading-spinner/loading-spinner";
import { useGetOrders } from "../../hooks/orders/use-get-orders";
import { CreateOrders } from "../../components/orders/create-orders";
import { OrdersCard } from "../../components/orders/orders-card";
import { Pagination } from "../../components/pagination/pagination";
import type { OrdersProps } from "../../types/orders/Tcreate-orders-payload";
import { useQueryClient } from "@tanstack/react-query";

function Orders() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const offset = (page - 1) * pageSize || 1;

  const { data: orders, isLoading } = useGetOrders(offset, pageSize);
  const postsList = orders?.results ?? [];
  const totalPages = orders?.count ? Math.ceil(orders.count / pageSize) : 1;

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }, [pageSize, queryClient]);

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
          <Pagination
            page={page}
            totalPages={totalPages}
            hasNext={Boolean(postsList?.next)}
            hasPrev={Boolean(postsList?.previous)}
            onChange={setPage}
          />
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
        {isLoading && <LoadingSpinner />}
      </main>
    </div>
  );
}

export default Orders;
