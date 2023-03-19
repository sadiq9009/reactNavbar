import { useState } from "react";

const Home = () => {
  const [saads, setSaads] = useState();
  const saad = () => {
    document.getElementById("doc").innerHTML = "Laoding....";

    setInterval(() => {
      var d = new Date().toLocaleString();
      document.getElementById("doc").innerHTML = d;
    }, 1000);
  };

  return (
    <>

      <div className="m">
        <input type="text" name="" value={saads} className="inputs"  placeholder="Enter the name"/>

        <p id="doc"></p>

        <button onClick={saad}>click</button>
      </div>
    </>
  );
};
export default Home;
