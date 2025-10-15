import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

export default function StartPage({ onStart }) {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      gridSize: "4x4",
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("gameSettings");
    if (saved) reset(JSON.parse(saved));
  }, [reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem("gameSettings", JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    localStorage.setItem("gameSettings", JSON.stringify(data));
    onStart();
  };

  return (
    <div className="text-center max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-4">Memory Cards</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-left bg-white p-4 rounded-xl shadow"
      >
        <label className="flex flex-col gap-1">
          <span className="font-medium">Розмір поля</span>
          <select {...register("gridSize")} className="border rounded p-2">
            <option value="2x2">2 × 2 (4 картки)</option>
            <option value="4x4">4 × 4 (16 карток)</option>
            <option value="6x6">6 × 6 (36 карток)</option>
            <option value="8x8">8 × 8 (64 картки)</option>
          </select>
        </label>

        <Button type="submit">Почати гру</Button>
      </form>
    </div>
  );
}
