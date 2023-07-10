function Tweet() {
  return (
    <div className="flex gap-1 p-2">
          <div className=" w-48 h-48">
            <img src="/profile-icons/elon.jpg" className="rounded-full object-cover" ></img>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="text-blue-800">
                <a href="#">Elon Musk (Parody)</a>
              </div>
              <div>@ElonMuskAOC - 12h</div>
            </div>
            <div>
              <p>I have a proposal for Mr. Zuckerberg…</p>
              <p>
                Winner of our fight gets ownership of the other persons social
                media platform for 24 HOURS.
              </p>
              <p>You win, you get Twitter.</p>
              <p>I win, I get Meta. </p>
              <p>Let me know.</p>
              <p>Best,</p>
              <p>Elon “your wife drives a Tesla” Musk</p>
            </div>
            <img src="/tweet-photos/photo1.jpg" className="rounded-2xl"/>
            <div className="flex gap-8">
              <div className="flex gap-1">
                <img src="/tweet-icons/likes.svg" className="h-6 w-6"/>
                <p>3,965</p>
              </div>
              <div className="flex gap-1">
                <img src="/tweet-icons/retweet.svg" className="h-6 w-6"/>
                <p>9,581</p>
              </div>
              <div className="flex gap-1">
                <img src="/tweet-icons/comments.svg" className="h-6 w-6"/>
                <p>84.8k</p>
              </div>
              <div className="flex gap-1">
                <img src="/tweet-icons/views.svg" className="h-6 w-6"/>
                <p>5M</p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Tweet;
