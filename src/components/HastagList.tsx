import React from "react";

export default function HastagList({
  companyList,
  setSelectedCompany,
}: {
  companyList: string[];
  setSelectedCompany: (str: string) => void;
}) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
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
      ))}
    </ul>
  );
}
