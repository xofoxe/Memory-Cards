import React from "react";
import Layout from "../components/Layout";
import GameGrid from "../components/GameGrid";
import Button from "../components/Button";

export default function GamePage({ onFinish }) {
  return (
    <Layout title="Гра">
      <GameGrid />
      <div className="mt-4">
        <Button onClick={onFinish}>Завершити гру</Button>
      </div>
    </Layout>
  );
}
