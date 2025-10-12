import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function ResultsPage({ onRestart }) {
  return (
    <Layout title="Результати">
      <p className="text-center mb-4">Ваш результат: 0</p>
      <Button onClick={onRestart}>Грати знову</Button>
    </Layout>
  );
}
