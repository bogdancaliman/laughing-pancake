import TrendsBlade from "../trends-blade/trends-label.component";

function TrendsContainer() {
  return (
    <div className="flex flex-col gap-2 bg-slate-400 rounded-lg p-2">
      <p className="text-xl">Trends for you</p>
      <TrendsBlade
        trendingIn="Trending in Romania"
        trend="USA"
        teweetsNumber={23000}
      />
      <TrendsBlade
        trendingIn="Trending in Romania"
        trend="USA"
        teweetsNumber={23000}
      />
      <TrendsBlade
        trendingIn="Trending in Romania"
        trend="USA"
        teweetsNumber={23000}
      />
    </div>
  );
}

export default TrendsContainer;
