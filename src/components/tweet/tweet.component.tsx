import { Heart, RefreshCcw, MessageSquare, BarChart2 } from "lucide-react";

function Tweet() {
  return (
    <div className="flex gap-1 p-2">
      <div className="w-48 h-48">
        <img
          src="/profile-icons/elon.jpg"
          className="object-cover rounded-full"
        ></img>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 -mb-2">
          <div className="font-semibold text-slate-900">
            <a href="#" className="hover:underline decoration-2">
              Elon Musk (Parody)
            </a>
          </div>
          <div>@ElonMuskAOC - 12h</div>
        </div>
        <div>
          <p>I have a proposal for Mr. Zuckerberg…</p>
          <p>
            Winner of our fight gets ownership of the other persons social media
            platform for 24 HOURS.
          </p>
          <p>You win, you get Twitter.</p>
          <p>I win, I get Meta. </p>
          <p>Let me know.</p>
          <p>Best,</p>
          <p>Elon “your wife drives a Tesla” Musk</p>
        </div>
        <img src="/tweet-photos/photo1.jpg" className="rounded-2xl" />
        <div className="flex gap-8">
          <div className="flex gap-1">
            <Heart />
            <p>3,965</p>
          </div>
          <div className="flex gap-1">
            <RefreshCcw />
            <p>9,581</p>
          </div>
          <div className="flex gap-1">
            <MessageSquare />
            <p>84.8k</p>
          </div>
          <div className="flex gap-1">
            <BarChart2 />
            <p>5M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
