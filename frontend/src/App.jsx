import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import home from "./pages/home";
import loginEmploye from "./pages/loginEmploye.jsx";
import registerEmploye from "./pages/registerEmploye";
import company from "./pages/company";
import offers from "./pages/offers";
import PerfilUser from "./pages/PerfilUser"
import FaqsCandidates from "./pages/faqsCandidates";
import FaqBusiness from "./pages/FaqsBusiness";
import FormJobPostulate from "./components/FormJobPostulate";
import Prices from "./pages/Prices";
import WeAre from './pages/Weare'
import Contacto from './pages/Contacto'
import FourZeroFour from './components/FourZeorFour'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/faqcandidates" component={FaqsCandidates} />
          <Route path="/loginEmploye" component={loginEmploye} />
          <Route path="/registerEmploye" component={registerEmploye} />
          <PrivateRoute path="/company" component={company} />
          <Route path="/PerfilUser" component={PerfilUser}/>
          <Route path="/offers" component={offers} />
          <Route path="/faqbusiness" exact component={FaqBusiness} />
          <Route path="/prices" component={Prices} />
          <PrivateRoute path="/publicJob" component={FormJobPostulate} />
          <Route path="/informacion" component={WeAre}/>
          <Route path="/contacto" component={Contacto} />
          <Route path="/" component={home} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
