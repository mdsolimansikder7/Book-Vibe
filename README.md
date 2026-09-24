
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

```

book-vibe/
├── public/
│   └── booksData.json          # Book data
└── src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Toaster, BookProvider)
│   ├── page.tsx            # Home page
│   ├── books/
│   │   ├── page.tsx        # All books
│   │   └── [bookId]/
│   │       └── page.tsx    # Book details
│   ├── listedbooks/
│   │   └── page.tsx        # Read / Wishlist tabs + sorting
│   └── page-to-read/
│       └── page.tsx        # Pages to Read chart
├── assets/                 # Images, logo and TypeScript types
├── components/
│   ├── bookdetailes/       # ReadButton, WishlistButton
│   ├── homepage/           # Banner, Books
│   └── shared/             # Navber, BooksCard, SortDropdown
└── contexts/
└── BookContext.tsx     # Read and Wishlist state

````

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mdsolimansikder7/Book-Vibe.git

# 2. Go to the project folder
cd Book-Vibe

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## 🖼️ Image Configuration

Book cover images are loaded from an external host. Make sure the host is allowed in `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
```

Restart the dev server after changing this file.

## 📦 Data Format

Each book in `public/booksData.json` looks like this:

```json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "https://...",
  "review": "...",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}
```

## 🌐 Deployment

The app can be deployed on [Vercel](https://vercel.com/) or GitHub Pages compatible hosts that support Next.js. Book data is imported directly from `public/booksData.json`, so no separate API server is required.

### 🔗 Live Link

[https://book-vibe-liard-two.vercel.app/](https://book-vibe-liard-two.vercel.app/)

## 🔮 Future Improvements

* Highlight the active link in the Navbar
* Add unique reviews for each book
* Search and category filters
* Remove a book from Read or Wishlist

## 👤 Author

**Md Soliman Sikder**
GitHub: [@mdsolimansikder7](https://github.com/mdsolimansikder7)

## 📄 License

This project is for learning purposes.



