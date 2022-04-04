import { useState, useEffect } from "react";

import { getBackground } from "../../utils/path";

import "./PageHeader.scss";

const PageHeader = ({ category }) => {
  const [background, setbackground] = useState("");
  useEffect(() => {
    const back = getBackground(category);
    setbackground(back);
  }, [category]);

  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default PageHeader;
