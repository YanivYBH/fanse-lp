type Props = {
  value: boolean;
  handler: () => void;
  label?: string;
};

const ToggleSwitch = ({ handler, value, label }: Props) => {
  return (
    <div className="flex w-full items-start justify-start gap-2">
      <button
        type="button"
        onClick={handler}
        className={` relative h-5 w-10 min-w-[40px] rounded-full transition-all duration-300 ${
          value ? "bg-primary" : "bg-[#e7e7e7]"
        }`}
      >
        <div
          className={`${
            value
              ? "left-full -translate-x-[calc(100%_+_2px)]"
              : "left-0.5 translate-x-0"
          } absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white transition-all duration-300 `}
        ></div>
      </button>
      {label && <p className="text-xs font-normal text-[#84848F]">{label}</p>}
    </div>
  );
};

export default ToggleSwitch;
