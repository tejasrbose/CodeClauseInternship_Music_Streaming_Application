import React, { useState } from 'react';
import { Fragment } from 'react';
import CreatePlayList from './CreatePlayList';
import { Card, CardBody, CardGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as MainLogo } from '../img/music-svgrepo-com (1).svg';
const Admin=()=>{

     
    return(
        <div className='admin'>
            <div>
               <MainLogo/>
            </div>
            <div>
                 <Card>
                    <CardBody>
                    <Link to="/makecategory" className="linkStyle">  <CardGroup>
                  <h1>Add Category</h1>
                        </CardGroup></Link> 
                    </CardBody>
                 </Card>
                 <hr/>
                 <Card>
                    <CardBody>
                    <Link to="/makelist" className="linkStyle">  <CardGroup>
                  <h1>Create New Playlist</h1>
                        </CardGroup></Link> 
                    </CardBody>
                 </Card>
                 <hr/>
                 <Card>
                    <CardBody>
                    <Link to="/makeSong" className="linkStyle">  <CardGroup>
                  <h1>Add Songs</h1>
                        </CardGroup></Link> 
                    </CardBody>
                 </Card>
                 
            </div>
       </div>
    );
};
export default Admin;
