
import { useGetBorrowSummaryQuery } from "../../redux/api/apiSlice";

export const BorrowSummery = () => {
  const { data: borrowSummary, isLoading, isError } = useGetBorrowSummaryQuery();
console.log(borrowSummary);

  if (isLoading) return <p className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to load borrow summary.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Borrow Summary</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm md:text-base">
          <thead>
            <tr className="bg-[#53877A] text-white">
              <th>#</th>
              <th>Book Title</th>
              <th>ISBN</th>
              <th>Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {borrowSummary?.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.book.title}</td>
                <td>{book.book.isbn}</td>
                <td>{book.totalQuantity} has been Borrowed</td>
              
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
