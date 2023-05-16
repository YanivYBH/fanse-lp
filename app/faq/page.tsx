"use client";

import FaqItem from "@/components/faq/FaqItem";
import InputField from "@/components/home/InputField";
import { useState } from "react";

const FAQ__DATA = [
  {
    question: "Fix a problem",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam minima porro qui temporibus accusantium quis, sint, recusandae delectus nemo veniam accusamus perspiciatis vitae ducimus! Suscipit commodi minus aliquam in.",
  },
  {
    question: "Fix a problem",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam minima porro qui temporibus accusantium quis, sint, recusandae delectus nemo veniam accusamus perspiciatis vitae ducimus! Suscipit commodi minus aliquam in.",
  },
  {
    question: "Fix a problem",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam minima porro qui temporibus accusantium quis, sint, recusandae delectus nemo veniam accusamus perspiciatis vitae ducimus! Suscipit commodi minus aliquam in.",
  },
  {
    question: "Fix a problem",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam minima porro qui temporibus accusantium quis, sint, recusandae delectus nemo veniam accusamus perspiciatis vitae ducimus! Suscipit commodi minus aliquam in.",
  },
  {
    question: "Fix a problem",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam minima porro qui temporibus accusantium quis, sint, recusandae delectus nemo veniam accusamus perspiciatis vitae ducimus! Suscipit commodi minus aliquam in.",
  },
];

const Faq = () => {
  const [searched, setSearched] = useState("");
  const [activeFaq, setActiveFaq] = useState<boolean[]>(
    Array(FAQ__DATA.length).fill(false),
  );

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-start">
      <div className="flex w-[90%] max-w-[800px] flex-col items-center justify-start gap-20">
        <div className="flex w-full max-w-[550px] flex-col items-center justify-start gap-3">
          <h3 className="text-2xl font-medium text-black">
            How can we help you?
          </h3>
          <InputField
            handler={(e) => {
              setSearched(e.target.value);
            }}
            label="Describe your issue"
            value={searched}
            ico="/search.svg"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-3">
          <p className="text-base font-medium text-black">Browse help topics</p>
          <div className="flex w-full flex-col items-start justify-start overflow-hidden rounded-xl border border-solid border-[#a9acaa]">
            {FAQ__DATA.filter((elem) => {
              if (
                elem.question.toLowerCase().includes(searched.toLowerCase()) ||
                elem.answer.toLowerCase().includes(searched.toLowerCase())
              ) {
                return elem;
              }
            }).map((elem, idx) => {
              return (
                <FaqItem
                  {...elem}
                  active={activeFaq[idx]}
                  setActive={setActiveFaq}
                  idx={idx}
                  key={elem.question + idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
