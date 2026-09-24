import React from "react";
import Link from "next/link";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/assets/type/bookstype";
import booksData from "../../../public/booksData.json";

const Books = ({ limit }: { limit?: number }) => {
  const allBooks = booksData as IBook[];
  const showBooks = limit ? allBooks.slice(0, limit) : allBooks;

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