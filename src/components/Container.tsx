import React from "react";
import Header from "./Header";
import FeedbackList from "./FeedbackList";
import { FeedbackItemType } from "@/lib/type";

export default function Container({
  errorMessage,
  isLoading,
  feedbackItems,
  onAddToList,
}: {
  errorMessage: string;
  isLoading: boolean;
  feedbackItems: FeedbackItemType[];
  onAddToList: (str: string) => void;
}) {
  return (
    <div className="w-[715px] h-full rounded-md overflow-hidden animate-[intro_0.4s]">
      <Header onAddToList={onAddToList} />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </div>
  );
}