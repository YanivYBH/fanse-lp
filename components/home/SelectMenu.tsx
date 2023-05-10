import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  label: string;
  value: string;
  handler: (value: string) => void;
  options: string[];
};

const SelectMenu = ({ label, value, handler, options }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [toggleDrop, setToggleDrop] = useState(false);
  useOnClickOutside(menuRef, () => setToggleDrop(false));
  return (
    <div ref={menuRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setToggleDrop((prev) => !prev)}
        className="flex h-[64px] w-full items-center justify-between gap-2 overflow-hidden rounded-2xl border-2 border-solid border-offWhite bg-offWhite px-2 transition-all  duration-300 focus-within:border-black focus-within:bg-white hover:border-lightGray focus-within:hover:border-black sm:px-4"
      >
        <div className="flex flex-col items-start justify-start ">
          <p className="text-xs font-semibold text-primary">{label}</p>
          <p className="font-semibold text-black">{value}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </button>
      {toggleDrop && (
        <div className="absolute left-0 top-[114%] z-30 flex w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-offWhite px-2 py-3 shadow-xl">
          {options.map((elem, idx) => (
            <button
              type="button"
              key={idx + elem}
              onClick={() => {
                handler(elem);
                setToggleDrop(false);
              }}
              className={`${
                elem === value
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              }  w-full rounded-xl p-3 text-left text-base font-normal focus:bg-primary focus:text-white`}
            >
              {elem}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
