import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CustomerAddress } from "../customer-address";
import { PaymentMethods } from "../payment-methods";
import { useFinalizeOrderSteps } from "../context/OrderStepsContext";
import { useEffect } from "react";

function StepSection() {
  const { state } = useFinalizeOrderSteps();

  return (
    <section className="flex items-center justify-center h-screen p-4">
      <div className="w-full sm:w-4/12 space-y-4">
        <div className="rounded-lg h-auto border border-slate-400 p-3 flex flex-col justify-between gap-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<StepSection />}>
          <Route path="/" element={<CustomerAddress />} />
          <Route path="pagamento" element={<PaymentMethods />} />
        </Route>
        <Route path="/concluido" element={<>Pedido concluído</>}/>
      </Routes>
    </BrowserRouter>
  );
}
