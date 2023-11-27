import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NorthAmericaComponent } from "./components/NorthAmerica/NorthAmerica";
import { SouthAmericaComponent } from "./components/SouthAmerica/SouthAmerica";
import { EuropeComponent } from "./components/Europe/Europe";
import { AfricaComponent } from "./components/Africa/Africa";
import { AsiaComponent } from "./components/Asia/Asia";
import { AustraliaComponent } from "./components/Australia/Australia";
import USA from "./components/USA/USA";
import Canada from "./components/Canada/Canada";
import Mexico from "./components/Mexico/Mexico";
import Jamaica from "./components/Jamaica/Jamaica";
import Brazil from "./components/Brazil/Brazil";
import Argentina from "./components/Argentina/Argentina";
import Colombia from "./components/Colombia/Colombia";
import Chile from "./components/Chile/Chile";
import Morocco from "./components/Morocco/Morocco";
import Egypt from "./components/Egypt/Egypt";
import SouthAfrica from "./components/SouthAfrica/SouthAfrica";
import Kenya from "./components/Kenya/Kenya";
import Spain from "./components/Spain/Spain";
import UnitedKingdom from "./components/UnitedKingdom/UnitedKingdom";
import France from "./components/France/France";
import Italy from "./components/Italy/Italy";
import China from "./components/China/China";
import Japan from "./components/Japan/Japan";
import Turkey from "./components/Turkey/Turkey";
import India from "./components/India/India";
import AustralianCountry from "./components/AustralianCountry/AustralianCountry";
import NewZealand from "./components/NewZealand/NewZealand";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/NorthAmerica" element={<NorthAmericaComponent />} />
          <Route path="/SouthAmerica" element={<SouthAmericaComponent />} />
          <Route path="/Europe" element={<EuropeComponent />} />
          <Route path="/Africa" element={<AfricaComponent />} />
          <Route path="/Asia" element={<AsiaComponent />} />
          <Route path="/Australia" element={<AustraliaComponent />} />
          <Route path="/USA" element={<USA />} />
          <Route path="/Canada" element={<Canada />} />
          <Route path="/Mexico" element={<Mexico />} />
          <Route path="/Jamaica" element={<Jamaica />} />
          <Route path="/Brazil" element={<Brazil />} />
          <Route path="/Argentina" element={<Argentina />} />
          <Route path="/Colombia" element={<Colombia />} />
          <Route path="/Chile" element={<Chile />} />
          <Route path="/Morocco" element={<Morocco />} />
          <Route path="/Egypt" element={<Egypt />} />
          <Route path="/SouthAfrica" element={<SouthAfrica />} />
          <Route path="/Kenya" element={<Kenya />} />
          <Route path="/Spain" element={<Spain />} />
          <Route path="/UnitedKingdom" element={<UnitedKingdom />} />
          <Route path="/France" element={<France />} />
          <Route path="/Italy" element={<Italy />} />
          <Route path="/China" element={<China />} />
          <Route path="/Japan" element={<Japan />} />
          <Route path="/Turkey" element={<Turkey />} />
          <Route path="/India" element={<India />} />
          <Route path="/AustraliaCountry" element={<AustralianCountry />} />
          <Route path="/NewZealand" element={<NewZealand />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
