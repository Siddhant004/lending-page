import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BusinessStratigies from "./components/BusinessStratigies";
import MarketPage from "./components/MarketPage";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <BusinessStratigies />
      <MarketPage />
    </div>
  );
}

export default App;
