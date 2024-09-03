import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerAddressType } from "./context/types";
import { useFinalizeOrderSteps } from "./context/OrderStepsContext";

const customerAddress: CustomerAddressType[] = [
  {
    id: 1,
    endereco: "Rua Capitão Manoel Pedro",
    uf: "MG",
    bairro: "Centro",
    numero: 150,
    cep: "37530-000",
    cidade: "Brazópolis",
  },
  {
    id: 2,
    endereco: "Avenida Coronel Carneiro Júnior",
    uf: "MG",
    bairro: "São José",
    numero: 210,
    cep: "37410-000",
    cidade: "Itajubá",
  },
  {
    id: 3,
    endereco: "Rua Coronel Francisco Braz",
    uf: "MG",
    bairro: "Vila Pinto",
    numero: 45,
    cep: "37460-000",
    cidade: "Santa Rita do Sapucaí",
  },
];

export function CustomerAddress() {
  const [selectedAddress, setSelectedAddress] = useState<number>(0);
  const { state, setAddress } = useFinalizeOrderSteps();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedAddress !== 0) {
      setAddress(selectedAddress);
    }
  }, [selectedAddress]);

  return (
    <div>
      <h2 className="mb-3 uppercase text-xs font-bold text-gray-500">
        Selecione o endereço
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {customerAddress.map((address) => (
          <div
            onClick={() => setSelectedAddress(address.id)}
            key={address.id}
            className={`p-3 h-auto rounded-lg text-gray-500 text-base cursor-pointer ${
              state.addressId === address.id
                ? "bg-cyan-700 text-white"
                : "bg-gray-100"
            }`}
          >
            <div>
              <p>{address.endereco}</p>
              <p>
                {address.bairro} - {address.cidade} - {address.uf}
              </p>
              <p>{address.cep}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/pagamento")}
        disabled={state.addressId === 0}
        className={`bg-cyan-700 h-10 w-full mt-3 text-white font-semibold uppercase rounded-md disabled:bg-opacity-70 disabled:cursor-not-allowed`}
      >
        Continuar
      </button>
    </div>
  );
}
