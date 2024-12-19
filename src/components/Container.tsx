import React from "react";
import Header from "./Header";
import FeedbackList from "./FeedbackList";

export default function Container() {
  return (
    <div className="w-[715px] h-full rounded-md overflow-hidden animate-[intro_0.4s]">
      <Header />
      <FeedbackList />
    </div>
  );
}
