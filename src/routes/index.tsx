import {
  BrowserRouter,
  Navigate,
  useNavigate,
  Outlet,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { CustomerAddress } from "../customer-address";
import { PaymentMethods } from "../payment-methods";
import { useFinalizeOrderSteps } from "../context/OrderStepsContext";
import { ArrowLeft } from "lucide-react";

function Home() {
  return <Link to="/pedido/finalizar">Finalizar pedido</Link>;
}

function StepSection() {
  const { state } = useFinalizeOrderSteps();
  const navigate = useNavigate();

  console.log(state);

  if (state.addressId && state.payment) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="flex items-center justify-center h-screen p-4">
      <div className="w-full sm:w-4/12 space-y-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
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
        <Route path="/" element={<Home />} />
        <Route path="/pedido/finalizar" element={<StepSection />}>
          <Route path="" element={<CustomerAddress />} />
          <Route path="pagamento" element={<PaymentMethods />} />
        </Route>
        <Route path="/pedido/:id" element={<>Detalha o pedido</>} />
      </Routes>
    </BrowserRouter>
  );
}
