import React, { useEffect, useState } from "react";

export const Component = () => {
  const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=";

  const [data, setData] = useState({ works: [], isFetching: false });

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setData({ works: data.works, isFetching: true });
        const response = await fetch(GOOD_READS_API_URL + "hobbit");
        const json = await response.json();
        const results = await json.results.work;
        setData({ works: results, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ works: data.works, isFetching: false });
      }
    };
    fetchWorks();
  }, []);

  if (data.isFetching) {
    console.log("fetching");
  } else {
    console.log(data.works);
  }

  return (
    <ul>
      {data.works.map((work, i) => (
        <li key={i}>{work.best_book.title._text}</li>
      ))}
    </ul>
  );
};

export default Component;
