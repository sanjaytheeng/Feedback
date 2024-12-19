import React from "react";

export default function HastagItem({
  company,
  setSelectedCompany,
}: {
  company: string;
  setSelectedCompany: (company: string) => void;
}) {
  return (
    <li key={company}>
      <button
        value={company}
        onClick={(e) => {
          setSelectedCompany(e.currentTarget.value);
        }}
      >
        #{company}
      </button>
    </li>
  );
}
