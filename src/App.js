import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Title";
 import Body from "./Components/Body";
import Footer from "./Components/Footer";


/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */


// Composing Components

//Config Driven UI



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
