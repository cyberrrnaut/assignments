import React, { useEffect, useState, useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const TOTAL_WORDS = 1000;

const WORDS = [
  "Batman",
  "Superman",
  "Sukuna",
  "Spiderman",
  "Venom",
  "Moon Knight",
];
const ALL_WORDS = [];

for (let i = 0; i < TOTAL_WORDS; i++) {
  let sentence = "";
  for (let j = 0; j < WORDS.length; j++) {
    sentence += WORDS[Math.floor(Math.random() * WORDS.length)];
    sentence += " ";
  }
  ALL_WORDS.push(sentence.trim());
}

export function Assignment2() {
  const [sentence, setSentence] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredStatements = useMemo(() => {
    return sentence.filter((x) => x.includes(filter));
  }, [sentence, filter]);

  return (
    <>
      <input
        type="text"
        placeholder="Filter sentences"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {filteredStatements.map((each, index) => (
        <div key={index}> {each} </div>
      ))}
    </>
  );
}
