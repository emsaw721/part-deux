import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// import Mobile from "./components/Mobile"; 
import './App.css';

// const queryToMatch = '';
// const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches);
// const isMobile = window.matchMedia("(minWidth: 250px)")
// function handleMediaQueryChange(event) {
//     if(event.matches) {
//         return(<Mobile></Mobile>)
//     } else {
//         return(<PortfolioContainer></PortfolioContainer>)
//     }
//   }
// isMobile.addListener(handleMediaQueryChange);

const App = () => <PortfolioContainer /> 


export default App;
