"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { IBook } from "@/assets/type/bookstype";
import booksData from "../../../public/booksData.json";
import { useBooks } from "@/app/contexts/BookContext";

const COLORS = ["#0085FF", "#00C49F", "#FFBB28", "#FF8042", "#FF0000", "#8B5CF6", "#23BE0A"];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderPeak = (props: any) => {
  const { x, y, width, height, index } = props;
  const color = COLORS[index % COLORS.length];
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={color}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  const color = COLORS[index % COLORS.length];
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={Number(y) - 8}
      fill={color}
      fontWeight="bold"
      fontSize={14}
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const PagesToRead = () => {
  const { readbooks } = useBooks();

  const data = (booksData as IBook[])
    .filter((book) => readbooks.includes(book.bookId))
    .map((book) => ({
      name:
        book.bookName.length > 14
          ? book.bookName.slice(0, 14) + "..."
          : book.bookName,
      pages: book.totalPages,
    }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-2xl py-5 text-center mb-8">
        <h2 className="text-3xl font-bold">Pages to Read</h2>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No read books yet. Open a book and press Read.
        </p>
      ) : (
        <div className="w-full h-[450px] bg-gray-50 rounded-2xl p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 30, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                interval={0}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 13 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 13 }}
              />
              <Bar dataKey="pages" shape={renderPeak}>
                <LabelList dataKey="pages" content={renderLabel} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default PagesToRead;