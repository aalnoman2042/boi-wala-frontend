import { useState } from "react";
import { useAddBookMutation } from "../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



export const AddBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  const [addBook, { isLoading  }] = useAddBookMutation();
  // console.log(isError);
  
  const [modalData, setModalData] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : name === "copies" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBook(formData).unwrap();
      setModalData({ message: "Book added successfully!", type: "success" });
  
      setFormData({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: 1,
        available: true,
      });
  setTimeout(() => {
      navigate("/books");
    }, 3000);
    } catch (err : unknown) {
      setModalData({ message: err.data.error._message, type: "error" });
      // console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Book</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
      

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full input input-bordered shadow" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full input input-bordered shadow" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Genre</label>
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} className="w-full input input-bordered shadow" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">ISBN</label>
          <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} className="w-full input input-bordered shadow" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Copies</label>
          <input type="number" name="copies" value={formData.copies} onChange={handleChange} className="w-full input input-bordered shadow" min={1} required />
        </div>
        <div className="flex items-center gap-3 mt-6">
          <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} className="checkbox checkbox-primary border-[#53877A] checked:bg-[#53877A] checked:border-[#53877A]" />
          <label className="font-medium select-none cursor-pointer">Available</label>
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full textarea textarea-bordered shadow" rows={4} required />
        </div>

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            
            disabled={isLoading}
            className="bg-[#53877A] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#4a706f] active:bg-[#41645f] transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#53877A] uppercase tracking-wide select-none"
          >
            {isLoading ? "Adding..." : "Submit"}
          </button>
        </div>
      </form>

      {/* DaisyUI Modal */}
      {modalData && (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" checked={true} readOnly />
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className={`font-bold text-lg mb-4 ${modalData.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {modalData.type === "success" ? "Success" : "Error"}
              </h3>
              <p className="mb-6">{modalData.message}</p>
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="bg-[#53877A] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#4a706f] active:bg-[#41645f] transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#53877A] uppercase tracking-wide select-none"
                  onClick={() => setModalData(null)}
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      
      )}
    </div>
  );
};
