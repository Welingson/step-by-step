import { useReducer, useState } from "react";
import { CircleCheck, CircleDot } from "lucide-react";

import { CustomerAddress } from "./customer-address";
import { PaymentMethods } from "./payment-methods";

type OrderSteps = {
  addressId: number;
  paymentMethod: number;
  payment: boolean;
};

interface StepsComponents {
  address?: React.ReactNode;
  paymentMethod?: React.ReactNode;
}

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

  const [currentStep, setCurrentStep] = useState(0);

  const StepsComponents: StepsComponents[] = [
    {
      address: <CustomerAddress dispath={dispath} />,
    },
    {
      paymentMethod: <PaymentMethods dispath={dispath} />,
    },
  ];

  const renderStepComponent = () => {
    const stepKeys = Object.keys(
      StepsComponents[currentStep]
    ) as (keyof StepsComponents)[];

    return StepsComponents[currentStep][stepKeys[0]];
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen p-4">
        <div className="w-full sm:w-4/12 space-y-4">
          <div className="flex justify-center relative">
            <ul className="inline-flex gap-6 w-auto ">
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <button>
                  <CircleCheck color="white" />
                </button>
              </li>
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <button>
                  <CircleDot color="white" />
                </button>
              </li>
            </ul>
            <div className="border-2 border-cyan-700 w-20 absolute top-[14px] -z-10"></div>
          </div>
          <div className="rounded-lg h-auto border border-slate-400 p-3 flex flex-col justify-between gap-8">
            <div>{renderStepComponent()}</div>
            <div className="flex justify-center w-full">
              <button
                disabled={currentStep === 1}
                onClick={
                  currentStep <= 1
                    ? () => setCurrentStep(currentStep + 1)
                    : () => setCurrentStep(currentStep)
                }
                className="w-2/3 h-10 uppercase rounded-md bg-cyan-700 text-white font-semibold disabled:bg-opacity-50"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
