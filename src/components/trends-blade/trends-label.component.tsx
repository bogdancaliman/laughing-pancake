interface Blade {
  trendingIn: string;
  trend: string;
  teweetsNumber: number;
}

function TrendsBlade({ trendingIn, trend, teweetsNumber }: Blade) {
  return (
    <div className="flex flex-col">
      <p>{trendingIn}</p>
      <p>{trend}</p>
      <p>{teweetsNumber} Tweets</p>
    </div>
  );
}

export default TrendsBlade;
