import { useState, useEffect } from "react";
import { IBook } from "../../types/types";

interface EditBookModalProps {
  book: IBook;
  onClose: () => void;
  onSubmit: (updatedBook: Partial<IBook>) => void;
}

export const EditBookModal: React.FC<EditBookModalProps> = ({ book, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<IBook>>(book);

  useEffect(() => {
    setFormData(book); // Reset form when book changes
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "copies" ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-90 backdrop-blur-sm z-50">

      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-[#59877A]">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="title">title</label>
          <input name="title" value={formData.title || ""} onChange={handleChange} className="input input-bordered w-full" placeholder="Title" />
           <label htmlFor="author">author</label>
          <input name="author" value={formData.author || ""} onChange={handleChange} className="input input-bordered w-full" placeholder="Author" />
           <label htmlFor="genre">genre</label>
          <input name="genre" value={formData.genre || ""} onChange={handleChange} className="input input-bordered w-full" placeholder="Genre" />
                <label htmlFor="isbn">iSBN</label>
          <input name="isbn" value={formData.isbn || ""} onChange={handleChange} className="input input-bordered w-full" placeholder="ISBN" />
           <label htmlFor="copies">copies</label>
          <input name="copies" type="number" value={formData.copies || 0} onChange={handleChange} className="input input-bordered w-full" placeholder="Copies" />

          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="btn btn-ghost">Cancel</button>
            <button type="submit" className="btn bg-[#53877A] hover:bg-[#4a706f] text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
