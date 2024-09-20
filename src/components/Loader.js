import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
function Loader() {
  let [loading , setLoading]= useState(true); 
  return (
    <div style={{marginTop: '150px'}}>
      <div className="sweet-loading text-center" style={{ marginTop: "150px" }}>
        <HashLoader color={"#0000"} loading={true} css="" size={80} />
      </div>
    </div>
  );
}

export default Loader;
