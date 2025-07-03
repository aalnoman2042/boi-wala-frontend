

import { IBook } from "../types/types";

export const dummyBooks: IBook[] = [
  {
    _id: "1",
    title: "JavaScript Essentials",
    author: "John Doe",
    genre: "Programming",
    isbn: "1234567890",
    copies: 3,
    available: true,
  },
  {
    _id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    isbn: "9876543210",
    copies: 0,
    available: false,
  },
];
