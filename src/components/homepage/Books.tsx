import React from "react";
import Link from "next/link";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/assets/type/bookstype";

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async ({ limit }: { limit?: number }) => {
  const booksData = await getBooks();
  const showBooks = limit ? booksData.slice(0, limit) : booksData;

  return (
    <section className="container mx-auto my-[70px] px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showBooks.map((book) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </div>

      {limit && (
        <div className="text-center mt-10">
          <Link href="/books" className="btn btn-primary">
            View All Books
          </Link>
        </div>
      )}
    </section>
  );
};

export default Books;