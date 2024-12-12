import React, { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from './Spinner'
import ErrorMessage from "./ErrorMessage";

export type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  company: string;
  badgeLetter: string;
  daysAgo: number;
  text: string;
};

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        console.log(res);
        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later!");
        console.warn(error);
      }
      
      setIsLoading(false);
    };

    getFeedbackItems();
  }, []);

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