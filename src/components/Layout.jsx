import React from "react";
import Header from "./Header";

export default function Layout({ title, children }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <Header title={title} />
      <div>{children}</div>
    </div>
  );
}
