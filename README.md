# 📚 Book Vibe

<p align="center">
  A modern and responsive book listing web application built with Next.js and TypeScript.
</p>

<p align="center">
  Browse books, explore book details, manage your Read and Wishlist lists, and track your reading progress.
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

💻 **GitHub Repository:**  
https://github.com/mdsolimansikder7/Book-Vibe

---

## 📖 About The Project

**Book Vibe** is a responsive book listing web application where users can discover books, explore detailed information, organize their reading list, and track their reading progress.

Users can:

- Browse available books
- View detailed book information
- Mark books as **Read**
- Add books to their **Wishlist**
- Sort listed books
- Navigate between books
- View their reading progress using a chart

The application uses local JSON data and browser `localStorage`, so **no separate backend or API server is required**.

---

## ✨ Features

### 🏠 Home Page

- Beautiful hero/banner section
- Featured books section
- Displays a preview of 3 books
- **View All Books** button
- Responsive design

### 📚 Books Page

- Displays all available books
- Responsive book card layout
- Book cover image
- Book name
- Author
- Rating
- View details option

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

### 📖 Read Books

Users can mark books as **Read**.

Once a book is marked as Read:

- It is saved in `localStorage`
- It appears in the Read Books section
- The same book cannot be added to Wishlist

### ❤️ Wishlist

Users can add books to their Wishlist.

The application also handles the relationship between Read and Wishlist:

- A Read book cannot be added to Wishlist
- When a Wishlist book is marked as Read, it is removed from Wishlist

### 📋 Listed Books

The Listed Books page contains:

- 📖 Read Books tab
- ❤️ Wishlist Books tab
- Book count for each tab
- Sorting functionality
- Book details navigation

### 🔽 Sorting

Books can be sorted by:

- ⭐ Rating
- 📄 Number of Pages
- 📅 Publishing Year

### 📊 Pages To Read

The application includes a reading progress page with an interactive bar chart.

The chart displays:

- Book name
- Total pages
- Books marked as Read

The chart is built using **Recharts**.

### ⏮️ Previous / Next Navigation

From the book details page, users can easily navigate between books using:

- ← Previous
- Next →

### 💾 Persistent Data

Read and Wishlist data are stored in the browser using:

```text
localStorage
