function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-white bg-opacity-50 py-4">
        <div className="flex flex-col">
          <span>Home</span>
          <div className="flex">
            <a className="flex-1 text-center py-2 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500">
              For you
            </a>
            <a className="flex-1 text-center py-2 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500">
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-1">
        <div>Profile</div>
        <div>
        HaxRob @haxrob - 8h
          <p>
            A twitter user mentioned the mobile app for their “smart” wifi
            connected power plug was requesting their location. The app has more
            then 1 million downloads. Curious, I ordered the 'Meross' branded
            device and it's just arrived. What will we find? Let's dig in ..
          </p>
          <img src="/tweet-photos/photo1.jpg" />
        </div>
      </div>
      <div className="bg-red-300 py-32 border border-black">
        Content with Red Background
      </div>
      <div className="bg-red-300 py-32 border border-black">
        Content with Red Background
      </div>
      <div className="bg-red-300 py-32 border border-black">
        Content with Red Background
      </div>
      <div className="bg-red-300 py-32 border border-black">
        Content with Red Background
      </div>
    </div>
  );
}

export default Home;
