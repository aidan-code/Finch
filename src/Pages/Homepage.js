import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "./Homepage.css";
import RecentTransferCard from "../Components/homepage/recentTransferCard";
import OrderCard from "../Components/homepage/orderCard";
import InsightCard from "../Components/homepage/insightCard";
import BalanceOverview from "../Components/homepage/balanceOverview";

const HomePage = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <RecentTransferCard />
      <OrderCard />
      <InsightCard />
      <BalanceOverview />
    </div>
  );
};

export default HomePage;
