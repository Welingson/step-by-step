import { useEffect, useState } from "react";

import { useFinalizeOrderSteps } from "./context/OrderStepsContext";
import { useNavigate } from "react-router-dom";

type paymentMethods = "PIX" | "BOLETO" | "CREDITO" | "DEBITO";

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState();
  const navigate = useNavigate();
  const { setPaymentResult, state } = useFinalizeOrderSteps();
  const handlePaymentMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value !== "") {
      setPaymentResult(true);
    }
  };

  useEffect(() => {
    if (state.addressId !== 0 && state.payment === true) {
      navigate("/concluido");
    }
  }, [state]);
  return (
    <div>
      <label
        htmlFor="payment-methods"
        className="uppercase text-xs font-bold text-gray-500"
      >
        Pague com
      </label>
      <select
        onChange={(e) => handlePaymentMethod(e)}
        name=""
        id="payment-methods"
        className="w-full h-11 border rounded-md outline-none"
      >
        <option value="">Selecione a forma de Pagamento</option>
        <option value="1">PIX</option>
        <option value="2">Cartão de crédito</option>
        <option value="3">Cartão de débito</option>
        <option value="4">Pagar na entrega</option>
      </select>
    </div>
  );
}
