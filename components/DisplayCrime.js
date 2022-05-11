import React from "react";

export default function DisplayCrime(crime) {
  return (
    <>
      <pre>{JSON.stringify(crime, null, 2)}</pre>;
      {/* {categories.map((category) => (
        <button>{category}</button>
      ))} */}
    </>
  );
}
