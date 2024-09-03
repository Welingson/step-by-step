export type OrderSteps = {
  addressId: number;
  paymentMethod: number;
  payment: boolean;
};

export type OrderStepsAction =
  | { type: "SET_PAYMENT_RESULT"; payload: boolean }
  | { type: "SET_PAYMENT_METHOD"; payload: number }
  | { type: "SET_ADDRESS_ID"; payload: number };

export type CustomerAddressType = {
  id: number;
  endereco: string;
  uf: string;
  bairro: string;
  numero: number;
  cep: string;
  cidade: string;
};

export interface FinalizeOrderProviderProps {
  children: React.ReactNode;
}

export type FinalizeOrderContextType = {
  state: OrderSteps;
  setAddress: (addressId: number) => void;
  setPaymentResult: (paymentResult: boolean) => void;
};
