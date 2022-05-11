import React from "react";
import useSWR, { SWRConfig } from "swr";
import DisplayCrime from "./DisplayCrime";

export default function Crime() {
  const { data, error } = useSWR(
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"
  );

  if (error) return <div>Failed to Load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <DisplayCrime
      crime={data}
      categories={[...new Set(data.map((crime) => crime.category))]}
    />
  );
}
