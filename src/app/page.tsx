import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Books limit={3} />
    </div>
  );
};

export default page;