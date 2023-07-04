/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import Tables from "views/examples/visitorOperations";
import Updatevisitor from "views/examples/updateVisitor";
import VisitationHistory from "views/examples/visitationHistory";
import Booking from "views/examples/Booking";
import AuthLayout from "layouts/Auth.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/booking/" element={<Booking />} />
      <Route path="/admin/" element={<Booking />} />
      <Route path="/history/*" element={<VisitationHistory />} />
      <Route path="/visitors" element={<Tables />} />
      <Route path="/update/:id" element={<Updatevisitor />} />
      {/* <Route path="/auth/*" element={<AuthLayout />} /> */}
      <Route path="/" element={<AuthLayout/>} />
    </Routes>
  </BrowserRouter>
);
