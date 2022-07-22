import React from "react";
import GlobalState from "./globals/GlobalState";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./utils";
import { Main, Header, Footer, PageNotFound, Finder } from "./components";

export default function App() {
  return (
    <GlobalState>
      <Router>
        <Wrapper type="big">
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/finder" element={<Finder />} />
            {/* <Route path="/login" exact element={<LoginPage />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer>Design and implementation by Daniel Martinez Lara.</Footer>
        </Wrapper>
      </Router>
    </GlobalState>
  );
}
