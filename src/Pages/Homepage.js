import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "./Homepage.css";
import RecentTransferCard from "../Components/homepage/recentTransferCard";
import OrderCard from "../Components/homepage/orderCard";
import InsightCard from "../Components/homepage/insightCard";

const HomePage = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <RecentTransferCard />
      <OrderCard />
      <InsightCard />
    </div>
  );
};

export default HomePage;
