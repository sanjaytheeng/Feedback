import React, { useState } from "react";

const MAX_CHARACTERS = 150;

export default function FeedbackForm({
  onAddToList,
}: {
  onAddToList: (str: string) => void;
}) {
  const [text, setText] = useState<string>("");

  const charCount = text.length;
  const remainingCharacters = MAX_CHARACTERS - charCount;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        name=""
        value={text}
        onChange={handleChange}
        placeholder=""
        spellCheck={false}
        id="feedback-textarea"
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company.
      </label>
      <div>
        <p className="italic">{remainingCharacters}</p>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}