import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/assets/type/bookstype";
import booksData from "../../../../public/booksData.json";
import ReadButton from "@/components/bookdetailes/ReadButton";
import WishlistButton from "@/components/bookdetailes/WishlistButton";

const BookDetails = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const allBooks = booksData as IBook[];
  const currentIndex = allBooks.findIndex((b) => b.bookId === Number(bookId));
  const book = allBooks[currentIndex];

  if (!book) {
    return (
      <div className="text-center my-20">
        <p className="mb-4">Book not found</p>
        <Link href="/listedbooks" className="btn btn-outline">
          Back to Listed Books
        </Link>
      </div>
    );
  }

  const prevBook = currentIndex > 0 ? allBooks[currentIndex - 1] : null;
  const nextBook =
    currentIndex < allBooks.length - 1 ? allBooks[currentIndex + 1] : null;

  return (
    <div className="container mx-auto my-[70px] px-4">
      <Link href="/listedbooks" className="btn btn-outline mb-6">
        ← Back to Listed Books
      </Link>

      <div className="card lg:card-side bg-base-100 shadow-sm border border-gray-200">
        <figure className="bg-gray-100 p-10 lg:w-1/2">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={400}
            className="h-[400px] w-auto object-contain"
          />
        </figure>

        <div className="card-body lg:w-1/2 space-y-2">
          <h1 className="card-title text-4xl">{book.bookName}</h1>
          <p className="text-gray-600">By : {book.author}</p>
          <p className="border-y border-gray-200 py-3">{book.category}</p>

          <p>
            <span className="font-bold">Review : </span>
            {book.review}
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <span className="font-bold">Tag</span>
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="space-y-1">
            <p>Number of Pages : <b>{book.totalPages}</b></p>
            <p>Publisher : <b>{book.publisher}</b></p>
            <p>Year of Publishing : <b>{book.yearOfPublishing}</b></p>
            <p>Rating : <b>{book.rating}</b></p>
          </div>

          <div className="card-actions pt-4 items-center">
            <ReadButton bookId={book.bookId} />
            <WishlistButton bookId={book.bookId} />
          </div>
        </div>
      </div>

     <div className="flex justify-between items-center mt-8">
  {prevBook ? (
    <Link
      href={`/books/${prevBook.bookId}`}
      className="btn bg-white border-2 border-[#23BE0A] text-[#23BE0A] rounded-full px-8 hover:bg-[#23BE0A] hover:text-white"
    >
      ← Previous
    </Link>
  ) : (
    <span />
  )}

  {nextBook ? (
    <Link
      href={`/books/${nextBook.bookId}`}
      className="btn bg-white border-2 border-[#23BE0A] text-[#23BE0A] rounded-full px-8 hover:bg-[#23BE0A] hover:text-white"
    >
      Next →
    </Link>
  ) : (
    <span />
  )}
</div>
    </div>
  );
};

export default BookDetails;