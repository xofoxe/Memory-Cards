import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function ResultsPage({ onRestart, result }) {
  return (
    <Layout title="Результати">
      <p className="text-center mb-2">Час: {result.time}s</p>
      <p className="text-center mb-4">Ходи: {result.moves}</p>
      <Button onClick={onRestart}>Грати знову</Button>
    </Layout>
  );
}
