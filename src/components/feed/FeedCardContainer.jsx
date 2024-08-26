import React from "react";
import CardFeed from "../custom/CardFeed";

const FeedCardContainer = () => {
  // for follow/connect people people
  const items = Array.from({ length: 10 }, (_, i) => i);
  return (
    <>
      {items.map((item, index) => (
        <CardFeed key={index} />
      ))}
    </>
  );
};

export default FeedCardContainer;
