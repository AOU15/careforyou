import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";


const Home = (props) => {


  return (
    <Layout user={props.user}>
      <h3>Home page</h3>
  </Layout>
)


}