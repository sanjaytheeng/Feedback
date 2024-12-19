import React from "react";
import HastagItem from "./HastagItem";
import { useFeedbackItemsContext } from "./context/FeedbackItemsContextProvider";

export default function HastagList() {
  const { uniqueCompanyList: companyList, setSelectedCompany } =
    useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HastagItem
          key={company}
          company={company}
          setSelectedCompany={setSelectedCompany}
        />
      ))}
    </ul>
  );
}
