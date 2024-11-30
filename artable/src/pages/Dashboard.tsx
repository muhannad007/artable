import axios from "axios";
import Drawing from "../components/Drawing";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  const [drawings, setDrawings]: any = useState(null);
  useEffect(() => {
    const getDrawings = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/drawings"
        );
        setDrawings(res.data);
        // console.log(drawings);
      } catch (error) {
        console.log(error);
      }
    };

    getDrawings();
  }, []);
  return (
    <div className="dashboard">
      <NavBar />
      <div className="drawings">
        {drawings &&
          drawings.map((drawing: any) => (
            <Drawing key={drawing._id} drawing={drawing} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
