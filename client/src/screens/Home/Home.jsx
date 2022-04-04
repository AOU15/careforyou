import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
// import "./Home.css";


const Home = (props) => {


  return (
    <Layout user={props.user}>
      <div className="intro">Home page</div>
      
      <h3>Home page</h3>
  </Layout>
)


}