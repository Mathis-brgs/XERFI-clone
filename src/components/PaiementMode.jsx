import { useState } from "react";

export default function PaiementMode() {
  const [selected, setSelected] = useState("Carte bancaire");

  const options = [
    "Carte bancaire",
    "American Express",
    "Paypal",
    "Paiement à réception de facture",
  ];
  return (
    <ul className="border pt-2 pb-8 rounded-xl border-black min-h-full">
      <div className="flex flex-col items-start gap-y-4 mt-4 border-b border-black pb-10">
        <div className="flex flex-col gap-6 mx-8">
          <h4>Choisissez votre mode de paiement</h4>
          {options.map((option) => {
            const isSelected = selected === option;
            return (
              <label
                key={option}
                className="flex items-center gap-x-2 cursor-pointer select-none"
                onClick={() => setSelected(option)}
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center ${
                    isSelected
                      ? "bg-blue-800 border-blue-800"
                      : "bg-transparent border-black"
                  }`}
                ></div>
                <p className="text-sm">{option}</p>
              </label>
            );
          })}
        </div>
      </div>
    </ul>
  );
}
