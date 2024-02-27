import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "./Homepage.css";
import RecentTransferCard from "../Components/homepage/recentTransferCard";
import OrderCard from "../Components/homepage/orderCard";
import InsightCard from "../Components/homepage/insightCard";
import BalanceOverview from "../Components/homepage/balanceOverview";
import Menu from "../Components/homepage/menu";


const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
        <BalanceOverview />
        <div className="sect">
        <Hero />
        <RecentTransferCard />
        <OrderCard />
        <InsightCard />
        <Menu />
      </div>
    </div>
  );
};

export default HomePage;
