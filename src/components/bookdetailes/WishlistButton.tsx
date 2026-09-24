"use client";

import React from "react";
import toast from "react-hot-toast";
import { useBooks } from "@/app/contexts/BookContext";

const WishlistButton = ({ bookId }: { bookId: number }) => {
  const { readbooks, wishlist, setWishlist } = useBooks();

  const isRead = readbooks.includes(bookId);
  const isWishlisted = wishlist.includes(bookId);

  const handleWishlist = () => {
    if (isRead) {
      toast.error("You have already read this book");
      return;
    }
    if (isWishlisted) {
      toast.error("Already in your wishlist");
      return;
    }
    setWishlist([...wishlist, bookId]);
    toast.success("Book added to Wishlist");
  };

  return (
    <button className="btn btn-info text-white" onClick={handleWishlist}>
      {isWishlisted ? "In Wishlist" : "Wishlist"}
    </button>
  );
};

export default WishlistButton;