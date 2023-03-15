import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results &&
        results.map((result) => (
          <div key={result.id}>{result.original_title}</div>
        ))}
    </div>
  );
};

export default Results;
