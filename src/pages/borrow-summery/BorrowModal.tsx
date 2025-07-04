import React, { useState } from "react";


interface BorrowModalProps {
  bookId: string;
  bookTitle: string;
  availableCopies: number;
  onClose: () => void;
  onSubmit: (data: { quantity: number; dueDate: string }) => void;
}

export const BorrowModal: React.FC<BorrowModalProps> = ({
  
  bookTitle,
  availableCopies,
  onClose,
  onSubmit,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dueDate || quantity < 1 || quantity > availableCopies) {
      alert("Please enter valid quantity and due date.");
      return;
    }

    onSubmit({ quantity, dueDate });
    console.log(quantity);
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-center text-[#53877A]">
          Borrow Book: {bookTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Quantity Input */}
          <div>
            <label className="block mb-1 font-medium">Quantity (max {availableCopies})</label>
            <input
              type="number"
              
              max={availableCopies}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button
            
              type="submit"
              className="btn bg-[#53877A] hover:bg-[#4a706f] text-white"
            >
              Confirm Borrow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
