import React from "react";
import Nav from "../components/Nav";
import Task from "./Task";
import History from "./History";
import Create from "./Create";
import Edit from "./Edit";
import NotFound from "./NotFound";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/task" exact element={<Task />} />
        <Route path="/new" exact element={<Create />} />
        <Route path="/history" exact element={<History />} />
        <Route path="/edit/:id" exact element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Home;
