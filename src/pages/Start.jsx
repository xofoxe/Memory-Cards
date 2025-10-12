import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function StartPage({ onStart }) {
  return (
    <Layout title="Memory Cards">
      <p className="text-center mb-4">Знайди всі парні картки!</p>
      <Button onClick={onStart}>Почати гру</Button>
    </Layout>
  );
}
