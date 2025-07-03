
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/types";

export function AllBooks() {
  const { data: books = [], isLoading, isError } = useGetBooksQuery();
  console.log(books);
  

  if (isLoading) return <p className="text-center"><span className="loading loading-bars loading-xl"></span></p>;
  if (isError) return <p className="text-center text-red-500">Failed to load books.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">All Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book: IBook) => (
          <div key={book._id} className="card bg-[#d8d2b9] text-neutral-content w-full max-w-sm mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p>
                <strong>Copies:</strong> {book.copies}{" "}
                <span className={`badge ml-2 ${book.available ? "badge-success" : "badge-error"}`}>
                  {book.available ? "Available" : "Unavailable"}
                </span>
              </p>

              <div className="card-actions justify-center space-x-2 mt-4">
                <button className="btn btn-sm btn-info" onClick={() => console.log("Edit", book._id)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-error" onClick={() => console.log("Delete", book._id)}>
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => console.log("Borrow", book._id)}
                  disabled={!book.available}
                  title={book.available ? "Borrow this book" : "Not available to borrow"}
                >
                  Borrow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
