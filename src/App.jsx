import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import http from "./services/http";
import { getAccessToken } from "./services/auth";
import "./global.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    authenticate();
  });

  const authenticate = async () => {
    try {
      const { data } = await getAccessToken();
      http.setAuthToken(data.access_token);
    } catch (error) {
      setAuthError(true);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <Header />
      <main>
        {loading && <Loading />}
        {!loading && authError && (
          <ErrorMessage message="Spotify authentication error." />
        )}
        {!loading && !authError && (
          <section>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/detail/:id"} element={<Detail />} />
            </Routes>
          </section>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;
