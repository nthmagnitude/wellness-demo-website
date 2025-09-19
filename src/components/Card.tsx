import { LuArrowRight } from "react-icons/lu";

interface cardProps {
  icon: string;
  heading: string;
  text: string;
}
function Card({ icon, heading, text }: cardProps) {
  return (
    <div className="w-1/3">
      <img src={icon} alt="" className="h-20 w-20 mb-10" />
      <h1 className="text-3xl font-semibold mb-4">{heading}</h1>
      <p>{text}</p>

      <p className="font-semibold mt-2 active-scale w-max">
        View more <LuArrowRight className="inline" />
      </p>
    </div>
  );
}

export default Card;
