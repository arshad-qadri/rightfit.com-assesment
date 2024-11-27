import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/home/hero";
import Products from "./components/home/Products";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Products />
      </MainLayout>
    </>
  );
}

export default App;
