import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {BuyerReview,SellerReview} from "./components/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <>
         <Header />
         <HeroSection />
         <Projects />
         <Contact />
         <BuyerReview />
         <SellerReview />

         {/*<div className="App">*/}

         {/*    <header className="App-header">*/}
         {/*        <img src={logo} className="App-logo" alt="logo" />*/}
         {/*        <p>*/}
         {/*            Edit <code>src/App.js</code> and save to reload.*/}
         {/*        </p>*/}
         {/*        <a*/}
         {/*            className="App-link"*/}
         {/*            href="https://reactjs.org"*/}
         {/*            target="_blank"*/}
         {/*            rel="noopener noreferrer"*/}
         {/*        >*/}
         {/*            Learn React*/}
         {/*        </a>*/}
         {/*    </header>*/}
         {/*</div>*/}
     </>

  );
}

export default App;
