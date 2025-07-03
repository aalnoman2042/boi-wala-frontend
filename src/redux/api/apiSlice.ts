import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../types/types";


interface BooksResponse {
  success: boolean;
  message: string;
  books: IBook[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://boi-wala-backend.vercel.app" }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",

      transformResponse: (response: BooksResponse) => response.books,
    }),
  }),
});

export const { useGetBooksQuery } = apiSlice;
