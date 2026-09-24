"use client";

import React from "react";
import toast from "react-hot-toast";
import { useBooks } from "@/app/contexts/BookContext";

const ReadButton = ({ bookId }: { bookId: number }) => {
  const { readbooks, setReadBooks, wishlist, setWishlist } = useBooks();

  const isRead = readbooks.includes(bookId);

  const handleRead = () => {
    if (isRead) {
      toast.error("You have already read this book");
      return;
    }
    setReadBooks([...readbooks, bookId]);
    setWishlist(wishlist.filter((id) => id !== bookId));
    toast.success("Book added to Read list");
  };

  return (
    <button className="btn btn-outline" onClick={handleRead}>
      {isRead ? "Already Read" : "Read"}
    </button>
  );
};

export default ReadButton;