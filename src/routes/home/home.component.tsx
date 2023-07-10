import Searchbar from "../../components/searchbar/searchbar.component";
import TrendsContainer from "../../components/trends-container/trends-container.component";
import Tweet from "../../components/tweet/tweet.component";

function Home() {
  return (
    <div className="grid grid-cols-[2fr,1fr]">
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
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
      <div className="flex flex-col px-2 gap-4 bg-yellow-200">
        <Searchbar />
        <TrendsContainer />
      </div>
    </div>
  );
}

export default Home;
