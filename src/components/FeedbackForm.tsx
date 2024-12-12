import React, { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState<string>("");
  const MAX_COUNT = 150;
  const charCount = MAX_COUNT - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (charCount <= MAX_COUNT) {
      setText(event.target.value);
    }
  };

  return (
    <>
      <form className={"form"}>
        <textarea
          id="feedback-text"
          name=""
          placeholder=""
          spellCheck={false}
          onChange={handleChange}
          value={text}
          maxLength={MAX_COUNT}
        ></textarea>
        <label htmlFor="feedback-text">
          Enter your feedback here, remember to #hastag the company.
        </label>
        <div>
          <p className="italic">{charCount}</p>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
