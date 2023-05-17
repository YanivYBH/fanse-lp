import React from "react";

type Props = {
  question: string;
  answer: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean[]>>;
  idx: number;
};

const FaqItem = ({ question, answer, active, setActive, idx }: Props) => {
  return (
    <div
    style={{ paddingTop :7, paddingBottom:7}}
      className={`grid ${
        active ? "grid-rows-[45px__1fr]" : "grid-rows-[45px__0fr]"
      } overflow-hidden w-full duration-700 ${
        idx !== 0 ? "border-t border-solid border-[#a9acaa]" : ""
      } `}
    >
      <button
        onClick={() => {
          setActive((prev) => {
            let newArray = Array(prev.length).fill(false);
            newArray[idx] = !prev[idx];
            return newArray;
          });
        }}
        
        className={`flex  w-full text-black text-sm font-medium justify-between items-center gap-4 px-6 hover:bg-[#efefef] transition-all duration-300`}
        style={{ textAlignLast:"left",textAlign:"left",marginTop:5,marginBottom:5}}
      >
        {question}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 transition-all duration-500 ${
            active ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`w-full bg-offWhite px-6 ${
          active ? "py-4" : "py-0"
        } transition-all overflow-hidden duration-700  flex justify-start items-start`}
      >
        <p className="text-black font-medium text-sm leading-[1.6]">{answer}</p>
      </div>
    
    </div>

    
  );
  
};

export default FaqItem;
