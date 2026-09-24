"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type BookContextType = {
  readbooks: number[];
  setReadBooks: React.Dispatch<React.SetStateAction<number[]>>;
  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
};

const BookContext = createContext<BookContextType | null>(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readbooks, setReadBooks] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const read = localStorage.getItem("readbooks");
    const wish = localStorage.getItem("wishlist");
    if (read) setReadBooks(JSON.parse(read));
    if (wish) setWishlist(JSON.parse(wish));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("readbooks", JSON.stringify(readbooks));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [readbooks, wishlist, loaded]);

  const shareData = {
    readbooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={shareData}>{children}</BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used inside BookProvider");
  return context;
};

export default BookContext;