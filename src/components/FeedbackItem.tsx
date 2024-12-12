import { TriangleUpIcon } from "@radix-ui/react-icons";
import React from "react";
import { FeedbackItemType } from "./FeedbackList";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: FeedbackItemType;
}) {
  const { upvoteCount, badgeLetter, company, daysAgo, text } = feedbackItem;

  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}