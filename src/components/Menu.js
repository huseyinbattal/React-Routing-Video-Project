import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Videos from "./Videos";

export default function Menu() {
  return (
    <div>
      <Link to="/video/fast">Fast</Link> ||
      <Link to="/video/slow">Slow</Link> ||
      <Link to="/video/cute">Cute</Link> ||
      <Link to="/video/eek">Eek</Link>
      <Routes>
        <Route path="video/:type" element={<Videos />}></Route>
      </Routes>
    </div>
  );
}
