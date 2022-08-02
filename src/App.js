import React from "react";
import GlobalState from "./globals/GlobalState";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "./utils";
import {
  Main,
  Header,
  Footer,
  PageNotFound,
  Finder,
  Analyse,
} from "./components";

export default function App() {
  return (
    <GlobalState>
      <Router>
        <Header />
        <Wrapper type="content">
          <Routes>
            {/* <Route exact path="/" element={<Main />} /> */}
            <Route exact path="/" element={<Finder />} />
            <Route exact path="/analys" element={<Analyse />} />
            {/* <Route path="/login" exact element={<LoginPage />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Wrapper>
        <Footer>Design and implementation by Daniel Martinez Lara.</Footer>
      </Router>
    </GlobalState>
  );
}
