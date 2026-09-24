# 📚 Book Vibe

<p align="center">
  <strong>A modern and responsive book listing web application built with Next.js and TypeScript.</strong>
</p>

<p align="center">
  Browse books, explore details, manage your reading list and wishlist, and visualize your reading progress.
</p>

<p align="center">
  <a href="https://book-vibe-liard-two.vercel.app/">🌐 Live Demo</a>
  •
  <a href="https://github.com/mdsolimansikder7/Book-Vibe">💻 GitHub Repository</a>
</p>

---

## 🌐 Live Demo

🚀 **Live Website:**  
https://book-vibe-liard-two.vercel.app/

---

## 📖 About The Project

**Book Vibe** is a responsive book listing application designed for readers to discover books and organize their reading activities.

Users can browse books, view detailed information, mark books as **Read**, add books to their **Wishlist**, and visualize the total pages of their read books through an interactive chart.

The project uses local JSON data, React Context API, and browser `localStorage`, so no separate backend or API server is required.

---

## ✨ Features

### 🏠 Home Page
- Beautiful hero/banner section
- Featured book section
- Displays a preview of 3 books
- **View All Books** button

### 📚 Books
- Browse all available books
- Responsive card layout
- Book cover, title, author and rating
- View detailed information

### 📖 Book Details
Each book has a dedicated details page containing:

- Book cover
- Book name
- Author
- Review
- Category
- Tags
- Total pages
- Publisher
- Publishing year
- Rating
- Read button
- Wishlist button

### ❤️ Read & Wishlist

Users can:

- Mark a book as **Read**
- Add a book to **Wishlist**
- Prevent a Read book from being added to Wishlist
- Automatically remove a Wishlist book when it is marked as Read
- Store reading data in browser `localStorage`

### 📋 Listed Books

The Listed Books page includes:

- 📖 Read Books
- ❤️ Wishlist Books
- Number of books in each list
- Sorting functionality

### 🔽 Sorting

Books can be sorted by:

- ⭐ Rating
- 📄 Number of Pages
- 📅 Publishing Year

### 📊 Pages To Read

An interactive chart shows the number of pages for books that have been marked as **Read**.

Built with **Recharts**.

### ⏮️ Previous / Next Navigation

Navigate between books directly from the book details page using:

- ← Previous
- Next →

### 📱 Responsive Design

The application is optimized for:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | React framework |
| **TypeScript** | Type safety |
| **React** | UI development |
| **Tailwind CSS** | Styling |
| **DaisyUI** | UI components |
| **Recharts** | Reading progress chart |
| **React Hot Toast** | Notifications |
| **React Context API** | State management |
| **localStorage** | Persistent Read/Wishlist data |

---

## 📂 Project Structure

```text
Book-Vibe/
│
├── public/
│   ├── booksData.json
│   └── book-vibe-icon.svg
│
├── src/
│   │
│   ├── app/
│   │   ├── contexts/
│   │   │   └── BookContext.tsx
│   │   │
│   │   ├── books/
│   │   │   ├── page.tsx
│   │   │   └── [bookId]/
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   │
│   │   ├── listedbooks/
│   │   │   └── page.tsx
│   │   │
│   │   ├── page-to-read/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── assets/
│   │   ├── type/
│   │   │   └── bookstype.ts
│   │   ├── hero_img.jpg
│   │   └── book.ico
│   │
│   └── components/
│       │
│       ├── bookdetailes/
│       │   ├── ReadButton.tsx
│       │   └── WishlistButton.tsx
│       │
│       ├── homepage/
│       │   ├── Banner.tsx
│       │   └── Books.tsx
│       │
│       └── shared/
│           ├── BooksCard.tsx
│           ├── Navber.tsx
│           └── SortDropdown.tsx
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
