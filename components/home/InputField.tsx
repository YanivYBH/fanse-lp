import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  note?: string;
  ico?: string;
};

const InputField = ({ label, value, handler, ico, note }: Props) => {
  return (
    <>
      <div className="flex h-[60px] w-full items-center justify-start gap-[20px] overflow-hidden rounded-2xl border-2 border-solid border-offWhite bg-offWhite px-2 transition-all duration-300 focus-within:border-black focus-within:bg-white hover:border-lightGray focus-within:hover:border-black sm:px-4">
        {ico && (
          <div className="w-[40px] min-w-[40px]">
            <Image src={ico} width={40} height={40} alt="ico" />
          </div>
        )}
        <div className="relative flex  h-full w-full">
          <input
            onChange={handler}
            type="text"
            className="peer mt-auto h-[45px] w-full bg-transparent text-base font-medium text-black text-opacity-50 outline-none  placeholder-shown:h-full "
            placeholder=" "
            value={value}
          />
          <p className="pointer-events-none absolute left-0 top-1 -translate-y-0 text-xs font-semibold text-primary transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-[#848484] peer-placeholder-shown:sm:text-base">
            {label}
          </p>
        </div>
      </div>
      {note && (
        <p className="-mt-3.5 text-xs font-normal text-[#84848F]">{note}</p>
      )}
    </>
  );
};

export default InputField;
