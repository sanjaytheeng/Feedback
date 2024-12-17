import { FeedbackItemType } from "@/lib/type";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: FeedbackItemType;
}) {
  const { upvoteCount, badgeLetter, company, daysAgo, text } = feedbackItem;

  const [open, setOpen] = useState(false);
  const [upvoteCountState, setUpvoteCount] = useState(upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setUpvoteCount((prev) => {
      return prev + 1;
      e.currentTarget.disabled = true;
    });
  };

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCountState}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
    </li>
  );
}
