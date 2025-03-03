import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AISelector = ({ onSelectAI }) => {
  const [selectedAI, setSelectedAI] = useState("ChatGPT");
  const [isOpen, setIsOpen] = useState(false);

  const aiModels = ["ChatGPT", "Claude", "Gemini", "Llama", "DeepSeek"];

  const handleSelect = (ai) => {
    setSelectedAI(ai);
    setIsOpen(false);
    onSelectAI(ai);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedAI}
        <FaChevronDown className="ml-2 text-gray-600" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-md">
          {aiModels.map((ai) => (
            <button
              key={ai}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleSelect(ai)}
            >
              {ai}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AISelector;
