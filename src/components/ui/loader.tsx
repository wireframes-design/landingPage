import React from "react";
import "@/index.css";
import loader from "@/assets/loader.gif";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img src={loader} />
    </div>
  );
};

export default Loader;
