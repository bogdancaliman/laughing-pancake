interface Blade {
  trendingIn: string;
  trend: string;
  teweetsNumber: number;
}

function TrendsBlade({ trendingIn, trend, teweetsNumber }: Blade) {
  return (
    <div className="flex flex-col">
      <p className="text-xs text-gray-600">{trendingIn}</p>
      <p className="text-xs">{trend}</p>
      <p className="text-xs text-gray-600">{teweetsNumber} Tweets</p>
    </div>
  );
}

export default TrendsBlade;
