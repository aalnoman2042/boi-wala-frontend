import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../types/types";

interface BooksResponse {
  success: boolean;
  message: string;
  books: IBook[];
}

interface BorrowSummary {
  _id: string;          // book id
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

interface BorrowResponse {
  success: boolean;
  message: string;
  summery: BorrowSummary[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boi-wala-backend.vercel.app",
  }),
  tagTypes: ['Books', 'Borrow'],
  endpoints: (builder) => ({
    // Get all books
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      transformResponse: (response: BooksResponse) => response.books,
      providesTags: ['Books'],
    }),

    // Add new book
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ['Books'],
    }),
    // delete a book 
    deleteBook: builder.mutation<{ success: boolean; message: string }, string>({
  query: (id) => ({
    url: `/books/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: ['Books'],
}),
// update a book
updateBook: builder.mutation<IBook, { id: string } & Partial<IBook>>({
  query: ({ id, ...data }) => ({
    url: `/books/${id}`,
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  invalidatesTags: ["Books"],
}),


    // Borrow Summary
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => "/borrow",
      transformResponse: (response: BorrowResponse) => response.summery,
      providesTags: ['Borrow'],
    }),

    // Borrow Book mutation
    borrowBook: builder.mutation<
      unknown,
      { book: string; quantity: number; dueDate: string }>
    ({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books", "Borrow"],
    }),
    
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation

} = apiSlice;
