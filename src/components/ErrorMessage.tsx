import React from "react";

export default function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-400">{message}</p>;
}