import React, { useEffect } from "react";
import { ReactComponent as Lesst } from '../img/is-less-than-svgrepo-com.svg';
import { ReactComponent as Grtet } from '../img/is-greater-than-svgrepo-com.svg';
import Catagory from "./Catagories";
const Content=()=>
{

  
    return (
      <div className="main">
        <div className="upperNav">
          <Lesst/>  
          <Grtet/>
        </div>
         <div className="mainContent">
         <Catagory />
        </div>
      </div>
    );
};

export default Content;