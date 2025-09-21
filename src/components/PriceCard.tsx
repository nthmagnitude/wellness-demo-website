export interface PriceCardProps {
  title: string;
  price: number;
  features: Array<string>;
  active?: boolean;
}

function PriceCard({ title, price, features, active }: PriceCardProps) {
  return (
    <div
      className={`${active ? "bg-accent" : "bg-white"} py-8 px-4 rounded-2xl flex flex-col items-center justify-between  space-y-6`}
    >
      <h1 className={`${active ? "text-white" : ""} text-2xl`}>{title}</h1>
      <h1 className={`${active ? "text-white" : ""} text-7xl`}>${price}</h1>
      <p className={active ? "text-white" : ""}>per user, per month</p>
      <button
        className={`${active ? "bg-green-500 text-accent" : "text-accent border border-accent"} rounded-full font-semibold p-4 px-6 active-scale`}
      >
        {active ? "Start my 15-day Trial" : "Join Membership"}
      </button>
      <div
        className={`${active ? "bg-white" : "bg-accent"} h-[0.15rem] w-32 rounded-full mx-auto`}
      ></div>
      <div className="space-y-6">
        {features.map((item, index) => (
          <p
            key={index}
            className={`${active ? "text-white" : ""} text-center`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
export default PriceCard;
