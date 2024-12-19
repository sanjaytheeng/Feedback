import React from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useFeedbackItemsContext } from "./context/FeedbackItemsContextProvider";

export default function FeedbackList() {
  const {
    isLoading,
    errorMessage,
    filteredFeedbackItems: feedbackItems,
  } = useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
}
