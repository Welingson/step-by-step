import { useState } from "react";

type CustomerAddressType = {
  id: number;
  endereco: string;
  uf: string;
  bairro: string;
  numero: number;
  cep: string;
  cidade: string;
};

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
  const [selectedAddress, setSelectedAddress] = useState<number>();

  return (
    <div className="grid grid-cols-2 gap-3">
      {customerAddress.map((address) => (
        <div
          onClick={() => setSelectedAddress(address.id)}
          key={address.id}
          className={`p-3 h-auto rounded-lg text-gray-500 text-base cursor-pointer ${
            selectedAddress === address.id ? "bg-cyan-700 text-white" : "bg-gray-100"
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
  );
}
