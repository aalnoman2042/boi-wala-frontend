import { useState } from "react";
import {
  useBorrowBookMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
} from "../../redux/api/apiSlice";
import { IBook } from "../../types/types";
import { BorrowModal } from "../borrow-summery/BorrowModal";
import { EditBookModal } from "../edit-book/EditBook";
import { useNavigate } from "react-router-dom";
// import { BorrowModal } from "./BorrowModal";

export function AllBooks() {

  const navigate = useNavigate()
  // all RTQ slice
  const { data: books = [], isLoading, isError } = useGetBooksQuery();
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation();

  // state for modal
  const [borrowMessage, setBorrowMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [editBook, setEditBook] = useState<IBook | null>(null);

  // borrow button
  const handleBorrow = async (data: { quantity: number; dueDate: string }) => {
    if (!selectedBook) return;

    try {
      await borrowBook({
        book: selectedBook._id,
        quantity: data.quantity,
        dueDate: data.dueDate,
      }).unwrap();

      setBorrowMessage({
        type: "success",
        text: "Book borrowed successfully!",
      });
      setSelectedBook(null);
       setTimeout(() => {
      navigate("/borrow-summary");
    }, 1500);
    } catch (err) {
      setBorrowMessage({ type: "error", text: "Failed to borrow book" });
      console.error(err);
    }

    setTimeout(() => setBorrowMessage(null), 4000);
  };
  // delete button
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await deleteBook(id).unwrap();
      setDeleteMessage({ type: "success", text: "Book deleted successfully!" });
    } catch (err) {
      setDeleteMessage({ type: "error", text: "Failed to delete the book." });
      console.log(err);
    } finally {
      setTimeout(() => setDeleteMessage(null), 4000);
    }
  };

  if (isLoading || isBorrowing)
    return (
      <p className="text-center">
        <span className="loading loading-bars loading-xl"></span>
      </p>
    );
  if (isError)
    return <p className="text-center text-red-500">Failed to load books.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">All Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {books.map((book: IBook) => (
    <div
      key={book._id}
      className="card bg-[#dadada] text-black w-9/12 max-w-sm mx-auto rounded-lg shadow-md transform transition duration-300 hover:scale-105"
    >
      <div className="card-body items-center text-center p-6 shadow-2xl">
        <h2 className="card-title text-[#3b695e] text-xl">{book.title}</h2>
        <p className="text-base">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-base">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-base">
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p className="text-base">
          <strong>Copies:</strong> {book.copies}{" "}
          <span
            className={`badge ml-2 ${
              book.copies !== 0 ? "badge-success" : "badge-error"
            }`}
          >
            {book.copies !== 0 ? "Available" : "Unavailable"}
          </span>
        </p>

        <div className="card-actions justify-center space-x-3 mt-6">
          <button
            className="btn btn-md btn-info"
            onClick={() => setEditBook(book)}
          >
            Edit
          </button>
          <button
            className="btn btn-md btn-error relative"
            onClick={() => handleDelete(book._id)}
            disabled={isDeleting}
          >
            Delete
            {isDeleting && (
              <span className="loading loading-spinner loading-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            )}
          </button>
          <button
            onClick={() => setSelectedBook(book)}
            className="btn btn-md btn-primary"
            disabled={book.copies === 0}
            title={
              book.copies === 0
                ? "Not available to borrow"
                : "Borrow this book"
            }
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Modal render */}
      {selectedBook && (
        <BorrowModal
          bookId={selectedBook._id}
          bookTitle={selectedBook.title}
          availableCopies={selectedBook.copies}
          onClose={() => setSelectedBook(null)}
          onSubmit={handleBorrow}
        />
      )}

      {borrowMessage && (
        <div className="fixed top-5 right-5 z-50">
          <div
            className={`alert shadow-lg ${
              borrowMessage.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span>{borrowMessage.text}</span>
          </div>
        </div>
      )}
      {deleteMessage && (
        <div className="fixed top-5 right-5 z-50">
          <div
            className={`alert shadow-lg ${
              deleteMessage.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span>{deleteMessage.text}</span>
          </div>
        </div>
      )}

      {editBook && (
        <EditBookModal
          book={editBook}
          onClose={() => setEditBook(null)}
          onSubmit={async (updatedBook) => {
            try {
              await updateBook({ id: editBook._id, ...updatedBook }).unwrap();
              setEditBook(null);
              setBorrowMessage({
                type: "success",
                text: "Book updated successfully!",
              });
            } catch (err) {
              console.error(err);
              setBorrowMessage({
                type: "error",
                text: "Failed to update book.",
              });
            }

            setTimeout(() => setBorrowMessage(null), 4000);
          }}
        />
      )}
    </div>
  );
}
