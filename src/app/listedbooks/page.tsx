"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/assets/type/bookstype";
import booksData from "../../../public/booksData.json";
import { useBooks } from "@/app/contexts/BookContext";
import SortDropdown, { SortType } from "@/components/shared/SortDropdown";


const ListedBooksPage = () => {
  const { readbooks, wishlist } = useBooks();
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<SortType>("");

  const allBooks = booksData as IBook[];

  const ids = activeTab === "read" ? readbooks : wishlist;
  let showBooks = allBooks.filter((book) => ids.includes(book.bookId));

  if (sortBy === "rating") {
    showBooks = [...showBooks].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "pages") {
    showBooks = [...showBooks].sort((a, b) => b.totalPages - a.totalPages);
  } else if (sortBy === "year") {
    showBooks = [...showBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="bg-gray-100 rounded-2xl py-5 text-center mb-8">
        <h2 className="text-3xl font-bold">Listed Books</h2>
      </div>
      <div className="flex justify-center mb-8">
  <SortDropdown onSort={setSortBy} />
</div>

    
     <div role="tablist" className="tabs tabs-bordered mb-6">
  <button
    role="tab"
    className={`tab ${activeTab === "read" ? "tab-active font-bold" : ""}`}
    onClick={() => setActiveTab("read")}
  >
    Read Books ({readbooks.length})
  </button>
  <button
    role="tab"
    className={`tab ${activeTab === "wishlist" ? "tab-active font-bold" : ""}`}
    onClick={() => setActiveTab("wishlist")}
  >
    Wishlist Books ({wishlist.length})
  </button>
</div>

      {showBooks.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No books here yet. Open a book and press{" "}
          {activeTab === "read" ? "Read" : "Wishlist"}.
        </p>
      )}

      <div className="space-y-5">
        {showBooks.map((book) => (
          <div
            key={book.bookId}
            className="border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row gap-6"
          >
            <div className="bg-gray-100 rounded-xl p-6 flex justify-center items-center md:w-[190px]">
              <Image
                src={book.image}
                alt={book.bookName}
                width={120}
                height={160}
                className="h-[140px] w-auto object-contain"
              />
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-bold">{book.bookName}</h3>
              <p className="text-gray-600">By : {book.author}</p>

              <div className="flex flex-wrap gap-3 items-center">
                <span className="font-bold">Tag</span>
                {book.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
                <span className="text-gray-600 text-sm">
                  Year of Publishing: {book.yearOfPublishing}
                </span>
              </div>

              <div className="flex flex-wrap gap-5 text-gray-600 text-sm">
                <span>Publisher: {book.publisher}</span>
                <span>Page {book.totalPages}</span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex flex-wrap gap-3 items-center">
                <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-sm">
                  Category: {book.category}
                </span>
                <span className="bg-orange-50 text-orange-400 px-3 py-1 rounded-full text-sm">
                  Rating: {book.rating}
                </span>
                <Link
                  href={`/books/${book.bookId}`}
                  className="btn btn-success btn-sm rounded-full text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBooksPage;