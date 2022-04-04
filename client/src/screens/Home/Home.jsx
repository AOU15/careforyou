import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
import React from "react";
import './Home.css';

export default function Home() {
 
    const Home = (props) => {

    <Layout user={props.user}>
      <h3>Home page</h3>
  </Layout>

    };
  return (
    // <Link to={`/home`}>
      <div className="intro"> <h1>Welcome to Care For You</h1> <p className="welcome">
        We dedicate this platform to those in need of a Specialist pertaining to their ailments. Please Login to view a list of services.
      </p>
        
      </div>
      // </Link>
  );
}


