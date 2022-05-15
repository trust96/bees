import Homepage from "app/pages/homepage/Homepage";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Homepage>
      <Homepage.Header />
    </Homepage>
  );
};

export default Home;
