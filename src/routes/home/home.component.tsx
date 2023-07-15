import Searchbar from "../../components/searchbar/searchbar.component";
import TrendsContainer from "../../components/trends-container/trends-container.component";
import Tweet from "../../components/tweet/tweet.component";

function Home() {
  return (
    <div className="grid grid-cols-[1.5fr,1fr]">
      <main className="pt-2">
        <div className="sticky top-0 py-4 bg-white bg-opacity-50 border-b-slate-400 border-b-[1px] backdrop-blur-md">
          <div className="flex flex-col ">
            <h1 className="ml-4 text-xl">Home</h1>
            <div className="flex">
              <a className="flex-1 py-2 text-center border-b-2 border-transparent hover:border-slate-900 focus:border-slate-900">
                For you
              </a>
              <a className="flex-1 py-2 text-center border-b-2 border-transparent hover:border-slate-900 focus:border-slate-900">
                Following
              </a>
            </div>
          </div>
        </div>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </main>
      <aside className="flex-col hidden gap-4 px-2 pt-2 md:flex bg-slate-200">
        <Searchbar />
        <TrendsContainer />
      </aside>
    </div>
  );
}

export default Home;
