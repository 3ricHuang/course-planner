import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="border border-gray-200 bg-white rounded-md"
        placeholder="Outlined"
      />
      <button className="rounded bg-blue-700">
        <SearchOutlined />
      </button>
    </div>
  );
}
