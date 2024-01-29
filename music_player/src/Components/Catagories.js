import React from "react";
import Playlist from "./Playlist";
import Player from "./Player";
const Catagory=()=>{

     const dataCategories = [
        {
            id:1,
            name: 'Romance',
            tag: 'Unleash your heart....'
        },
        {
            id:2,
            name: 'Focus',
            tag:'Music that help to concentrat..'
        },
        {
            id:3,
            name: 'Sad ',
            tag: 'Broken heart? heal it !!'
        },
        {
            id:4,
            name: 'Party',
            tag: 'Party nights...'
        },
        {
            id:5,
            name: 'Thrill',
            tag: 'Make thrill..'
        },
        {
             id:6,
             name: 'Fiteness/upbeat',
             tag: 'Work Hard all the time ....'
        }
     ]

    return(
     <div className="maininner">
        {dataCategories.map((category)=>(
          <div>
           <h1 className="mainContent">{category.name}</h1>
            <p className="subtext">{category.tag}</p>
            <Playlist category_Id={category.id} cat_obj={category} />
       </div>
        ))}
        
     </div>
     
    );
};
export default Catagory;