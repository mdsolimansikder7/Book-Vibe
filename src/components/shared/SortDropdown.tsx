"use client";

import React from "react";

export type SortType = "" | "rating" | "pages" | "year";

const options: { label: string; value: SortType }[] = [
  { label: "Rating", value: "rating" },
  { label: "Number of pages", value: "pages" },
  { label: "Publisher year", value: "year" },
];

const SortDropdown = ({
  onSort,
}: {
  onSort: (value: SortType) => void;
}) => {
  const handleSelect = (value: SortType) => {
    onSort(value);
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-success text-white text-lg px-8 gap-3"
      >
        Sort By
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content w-full bg-gray-100 rounded-lg mt-1 py-3 z-10 text-center space-y-2"
      >
        {options.map((opt) => (
          <li key={opt.value}>
            <button
              onClick={() => handleSelect(opt.value)}
              className="w-full text-gray-700 hover:text-green-600"
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortDropdown;