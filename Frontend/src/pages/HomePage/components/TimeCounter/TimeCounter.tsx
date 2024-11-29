import useHandler from "./controller";

export default function TimeCounter() {
  const { day, hour, minute, second } = useHandler();

  return (
    <div className="flex items-end">
      <div className="flex flex-col">
        <h6 className="text-[0.5rem] md:text-[0.75rem] leading-normal mb-1">
          Days
        </h6>
        <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold">
          {day < 10 ? "0" + day : day}
        </h2>
      </div>
      <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold mb-2 mx-1 md:mx-[17px] text-button-hover-red">
        :
      </h2>
      <div className="flex flex-col">
        <h6 className="text-[0.5rem] md:text-[0.75rem] leading-normal mb-1">
          Hours
        </h6>
        <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold">
          {hour < 10 ? "0" + hour : hour}
        </h2>
      </div>
      <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold mb-2 mx-1 md:mx-[17px] text-button-hover-red">
        :
      </h2>
      <div className="flex flex-col">
        <h6 className="text-[0.5rem] md:text-[0.75rem] leading-normal mb-1">
          Minutes
        </h6>
        <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold">
          {minute < 10 ? "0" + minute : minute}
        </h2>
      </div>
      <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold mb-2 mx-1 md:mx-[17px] text-button-hover-red">
        :
      </h2>
      <div className="flex flex-col">
        <h6 className="text-[0.5rem] md:text-[0.75rem] leading-normal mb-1">
          Seconds
        </h6>
        <h2 className="text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[1.875rem] font-semibold">
          {second < 10 ? "0" + second : second}
        </h2>
      </div>
    </div>
  );
}
