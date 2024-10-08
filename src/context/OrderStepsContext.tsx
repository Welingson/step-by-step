import { useContext, createContext, useReducer, useEffect } from "react";

import {
  FinalizeOrderContextType,
  FinalizeOrderProviderProps,
  OrderSteps,
  OrderStepsAction,
} from "./types";

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
    case "SET_INITIAL_STATE":
      return { ...state, addressId: 0, payment: false, paymentMethod: 0 };
  }
};

const FinalizeOrderStepsContext = createContext<FinalizeOrderContextType>({
  state: orderStepsInitialState,
  setAddress: () => null,
  setPaymentResult: () => null,
});

export const FinalizeOrderStepsContextProvider = ({
  children,
}: FinalizeOrderProviderProps) => {
  const [state, dispath] = useReducer(
    orderStepsReducer,
    orderStepsInitialState
  );

  const setAddress = (addressId: number) => {
    dispath({ type: "SET_ADDRESS_ID", payload: addressId });
  };

  const setPaymentResult = (paymentResult: boolean) => {
    dispath({ type: "SET_PAYMENT_RESULT", payload: paymentResult });
  };

  useEffect(() => {
    if (state.addressId !== 0 && state.payment) {
      console.log("Faz uma requisição cadastrando o pedido");
      dispath({ type: "SET_INITIAL_STATE", payload: false });
    }
  }, [state]);

  return (
    <FinalizeOrderStepsContext.Provider
      value={{ state, setAddress, setPaymentResult }}
    >
      {children}
    </FinalizeOrderStepsContext.Provider>
  );
};

export const useFinalizeOrderSteps = (): FinalizeOrderContextType => {
  const context = useContext(FinalizeOrderStepsContext);
  if (!context) {
    throw new Error(
      "useFinalizeOrderSteps must be used within an FinalizeOrderProvider."
    );
  }

  return context;
};
