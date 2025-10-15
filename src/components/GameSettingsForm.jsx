import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGameSettings } from "../context/GameSettingsContext";
import Button from "./Button";

const schema = yup.object({
  gridSize: yup
    .number()
    .min(2, "Мінімальний розмір 2")
    .max(8, "Максимальний розмір 8")
    .required("Вкажіть розмір сітки"),
  flipSpeed: yup
    .number()
    .min(200, "Мінімальна швидкість 200 мс")
    .max(3000, "Максимальна швидкість 3000 мс")
    .required("Вкажіть швидкість перевороту"),
});

export default function GameSettingsForm() {
  const { settings, setSettings } = useGameSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: settings,
  });

  const onSubmit = (data) => {
    setSettings(data);  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-lg">
      <div>
        <label className="block mb-1 font-semibold">Розмір сітки:</label>
        <input
          type="number"
          {...register("gridSize")}
          className="border p-2 rounded w-full"
        />
        {errors.gridSize && <p className="text-red-500 text-sm">{errors.gridSize.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Швидкість перевороту (мс):</label>
        <input
          type="number"
          {...register("flipSpeed")}
          className="border p-2 rounded w-full"
        />
        {errors.flipSpeed && <p className="text-red-500 text-sm">{errors.flipSpeed.message}</p>}
      </div>

      <Button type="submit">Зберегти налаштування</Button>
    </form>
  );
}
