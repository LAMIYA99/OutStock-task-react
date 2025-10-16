import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import Loading from "./Featured/Common/Loading";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <Loading/>
      </Layout>
    </div>
  );
};

export default App;
