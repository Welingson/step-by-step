import { OrderStepsAction } from "./App";

// type PaymentMethodsType = {
//   id: number;
//   titulo: string;
//   descricao: string;
// };

interface PaymentMethodsProps {
  dispath: (action: OrderStepsAction) => void;
}

export function PaymentMethods({ dispath }: PaymentMethodsProps) {
  return (
    <div className="">
      <label
        htmlFor="payment-methods"
        className="uppercase text-xs font-bold text-gray-500"
      >
        Pague com
      </label>
      <select
        name=""
        id="payment-methods"
        className="w-full h-11 border rounded-md outline-none"
        onChange={(e) =>
          dispath({
            type: "SET_PAYMENT_METHOD",
            payload: e.target.value !== "" ? parseInt(e.target.value) : 0,
          })
        }
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
