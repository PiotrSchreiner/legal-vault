"use client";

import { useState } from "react";

export default function DocumentList({ documents }) {
  const [filter, setFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  const categories = ["All", ...new Set(documents.map((doc) => doc.category))];

  const sortedAndFilteredDocs = documents
    .filter((doc) => (filter === "All" ? true : doc.category === filter))
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-blue-500 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-zinc-500 text-sm">
              <th
                className="pb-4 font-medium cursor-pointer hover:text-white transition-colors"
                onClick={() => requestSort("name")}
              >
                Document Name{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="pb-4 font-medium cursor-pointer hover:text-white transition-colors"
                onClick={() => requestSort("category")}
              >
                Category{" "}
                {sortConfig.key === "category" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="pb-4 font-medium cursor-pointer hover:text-white transition-colors"
                onClick={() => requestSort("date")}
              >
                Date{" "}
                {sortConfig.key === "date" &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th className="pb-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredDocs.map((doc) => (
              <tr
                key={doc.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg group"
              >
                <td className="py-4 px-4 rounded-l-lg border-y border-l border-zinc-800 font-medium text-zinc-200">
                  {doc.name}
                </td>
                <td className="py-4 px-4 border-y border-zinc-800 text-zinc-400 text-sm">
                  {doc.category}
                </td>
                <td className="py-4 px-4 border-y border-zinc-800 text-zinc-500 text-sm font-mono">
                  {doc.date}
                </td>
                <td className="py-4 px-4 rounded-r-lg border-y border-r border-zinc-800 text-right">
                  <button className="text-zinc-500 hover:text-white mr-4">
                    Download
                  </button>
                  <button className="text-red-500/50 hover:text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
