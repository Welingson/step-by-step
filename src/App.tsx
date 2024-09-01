import { Circle, CircleCheck, CircleDot } from "lucide-react";
import { CustomerAddress } from "./customer-address";
// import { PaymentMethods } from "./payment-methods";
import { useReducer } from "react";

type OrderSteps = {
  addressId: number;
  paymentMethod: number;
  payment: boolean;
};

export type OrderStepsAction =
  | { type: "SET_PAYMENT_RESULT"; payload: boolean }
  | { type: "SET_PAYMENT_METHOD"; payload: number }
  | { type: "SET_ADDRESS_ID"; payload: number };

const orderStepsInitialState: OrderSteps = {
  addressId: 0,
  payment: false,
  paymentMethod: 0,
};

const orderStepsReducer = (
  state: OrderSteps,
  action: OrderStepsAction
): OrderSteps => {
  switch (action.type) {
    case "SET_ADDRESS_ID":
      return { ...state, addressId: action.payload };
    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    case "SET_PAYMENT_RESULT":
      return { ...state, payment: action.payload };
  }
};

export function App() {
  const [orderSteps, dispath] = useReducer(
    orderStepsReducer,
    orderStepsInitialState
  );

  console.log(orderSteps);
  

  return (
    <>
      <section className="flex items-center justify-center h-screen p-4">
        <div className="w-full sm:w-4/12 space-y-4">
          <div className="flex justify-center relative">
            <ul className="inline-flex gap-6 w-auto ">
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <CircleCheck color="white" />
              </li>
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <CircleDot color="white" />
              </li>
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <Circle color="white" />
              </li>
            </ul>
            <div className="border-2 border-cyan-700 w-24 absolute top-[14px] -z-10"></div>
          </div>
          <div className="rounded-lg h-auto border border-slate-400 p-3">
            <CustomerAddress dispath={dispath} />
            {/* <PaymentMethods dispath={dispath} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
