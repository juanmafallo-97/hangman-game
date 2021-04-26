import React from "react";
import { useSelector } from "react-redux";

export default function Lives() {
  const lives = useSelector((state) => state.lives);
  return <div className="lives">Vidas restantes: {lives}</div>;
}
