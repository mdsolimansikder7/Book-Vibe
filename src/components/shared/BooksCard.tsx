import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/assets/type/bookstype";

const BooksCard = ({ book }: { book: IBook }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      <div className="bg-gray-100 rounded-xl py-8 flex justify-center">
        <Image
          src={book.image}
          alt={book.bookName}
          width={150}
          height={200}
          className="h-[200px] w-auto object-contain"
        />
      </div>

      <div className="flex gap-3 mt-5">
        {book.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-4">{book.bookName}</h3>
      <p className="text-gray-600 mt-2">By : {book.author}</p>

      <div className="border-t border-dashed border-gray-300 mt-4 pt-4 flex justify-between items-center">
        <p className="text-gray-600">{book.category}</p>
        <p className="text-gray-600">{book.rating} ☆</p>
      </div>

      <Link
        href={`/books/${book.bookId}`}
        className="btn btn-outline w-full mt-4"
      >
        View Details
      </Link>
    </div>
  );
};

export default BooksCard;