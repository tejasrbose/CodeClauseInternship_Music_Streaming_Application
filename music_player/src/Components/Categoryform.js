import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input,Container,Button ,Label,Row,Col} from "reactstrap";
import axios from "axios";
import {toast} from 'react-toastify';
import base_url from "../api/bootapi";
const CategoryForm=()=>{

 const[cat, setCat]=useState({});
 
 const handleform =(e)=>{
    console.log(cat);
    postSongToServer(cat);
    e.preventDefault();
  }


 const postSongToServer=(data)=>{
    if(data.catId && data.catName && data.tagLine)
    {
       axios.post(`${base_url}/saveCat`,cat).then(
        (response) => {
          console.log(response);
          toast.success("Category created Succesfully !!", { position: "top-center" });
        },
        (error) => {
          console.log(error);
          toast.error("Something went Wrong, or Id already exist !!", { position: "top-center" });
        }
       );
    }
    else{
      console.log("Invalid data. Please fill in all fields.");
      toast.warning("Invalid data. Please fill in all fields.", { position: "top-center" });
    }
  } 
  

    return(
       <div className='addSong'>
        
           <Fragment>
           <h1>Create Category</h1>
              <Form onSubmit={handleform}>
              <Row>
<Col md={6}>
  <FormGroup>
    <Label for="PlayListId">
      Category ID
    </Label>
    <Input
      id="catId"
      bsSize="lg"
      name="catId"
      placeholder="eg. 123,1001,..."
      type="text"
      onChange={(e) => setCat({ ...cat, catId: e.target.value })}
    />
  </FormGroup>
</Col>
<Col md={6}>
  <FormGroup>
    <Label for="Category Name">
      Category Name
    </Label>
    <Input
      id="catName"
      bsSize="lg"
      name="catName"
      placeholder="eg. Concentration, Focus, Party..."
      type="text"
      onChange={(e) => setCat({ ...cat, catName: e.target.value })}
    />
  </FormGroup>
</Col>
</Row>
<FormGroup>
    <Label for="Cattag">
      Category Tagline
    </Label>
    <Input
      id="tagLine"
      bsSize="lg"
      name="tagLine"
      placeholder="eg. 123,1001,..."
      type="text"
      onChange={(e) => setCat({ ...cat, tagLine: e.target.value })}
    />
  </FormGroup>

<Container >
  <Button color="success"  style={{width:100,marginLeft:20}} outline type="submit">
     Create
  </Button>
  <Button color="warning ml-2" style={{width:100,marginLeft:20}} type="reset" outline>Clear </Button>
  </Container>
              </Form>

           </Fragment>

       </div>
    );
}
export default CategoryForm;