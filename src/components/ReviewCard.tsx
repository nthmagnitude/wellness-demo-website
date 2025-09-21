import reviewer from "../assets/images/reviewer.webp";
export interface serviceProps {
  name: string;
  username: string;
  review: string;
  date: string;
}

function ReviewCard({ name, username, review, date }: serviceProps) {
  return (
    <div className="bg-green-300 flex flex-col justify-between p-6 rounded-2xl space-y-6">
      <div className="flex items-center space-x-4">
        <img src={reviewer} alt="" className="w-14 h-14 rounded-full" />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="text-accent/30">{username}</p>
        </div>
      </div>
      <p>"{review}"</p>
      <p className="text-right text-accent/30 mt-8">{date}</p>
    </div>
  );
}
export default ReviewCard;
