# 📚 Book Vibe

Book Vibe is a book listing web app where you can browse books, read their details, mark them as **Read** or add them to a **Wishlist**, and see a chart of the pages you have read.

Built with **Next.js**, **TypeScript**, **Tailwind CSS** and **DaisyUI**.

## ✨ Features

- **Home page** with a hero banner and a preview of 3 books, plus a "View All Books" button
- **Books page** showing every book in a card layout
- **Book details page** with cover, author, review, tags, pages, publisher, year and rating
- **Read / Wishlist buttons** with toast notifications 
  - A book already marked as Read cannot be added to the Wishlist
  - Marking a Wishlist book as Read moves it out of the Wishlist
- **Previous / Next navigation** to move between books on the details page
- **Listed Books page** with **Read Books** and **Wishlist Books** tabs
- **Sort By** dropdown: Rating, Number of pages, Publisher year
- **Pages to Read page** with a bar chart of the pages of every book you have read
- **Persistent data**: your Read and Wishlist lists are saved in `localStorage`
- Responsive layout for mobile and desktop

## 🛠️ Tech Stack

| Purpose Tool     |                                                 |
| ---------------- | ----------------------------------------------- |
| Framework        | [Next.js](https://nextjs.org/) (App Router)     |
| Language         | TypeScript                                      |
| Styling          | Tailwind CSS + [DaisyUI](https://daisyui.com/)  |
| Charts           | [Recharts](https://recharts.org/)               |
| Notifications    | [react-hot-toast](https://react-hot-toast.com/) |
| State management | React Context API + `localStorage`              |

## 📁 Project Structure
