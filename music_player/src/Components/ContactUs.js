import React,{ Fragment, useState }  from "react";
import { Form, FormGroup, Input,Container,Button ,Label,Row,Col} from "reactstrap";
import { ReactComponent as Logo } from "../img/contact-center-ai-svgrepo-com.svg";
import { toast } from "react-toastify";
const Contact=()=>{
 
 const [msg, setMsg] = useState({});

     const handleform=()=>{
        if(msg.Name!=null && msg.email!=null && msg.issue!=null)
        {
        toast.success("Form Submitted succesfully !!",{position:"top-center"});
        }
        else{
            toast.error("Fill All the details",{position:"top-center"});
        }
     }

    return (
       <div className="contactus">
        <div className="logo">
        <h1>Contact Us</h1>
          <Logo/>
        </div>
        <Fragment>
                <Form className="formclass">
                  <Row>
                     <Col md={6}>
                       <FormGroup>
                         <Label for="Name">
                           Name
                         </Label>
                         <Input
                           id="Name"
                           bsSize="lg"
                           name="Name"
                           placeholder="Enter Your Name..."
                           type="text"
                           onChange={(e) => setMsg({ ...msg, Name: e.target.value })}
                         />
                       </FormGroup>
                     </Col>
                     <Col md={6}>
                       <FormGroup>
                         <Label for="email">
                           Email
                         </Label>
                         <Input
                           id="email"
                           bsSize="lg"
                           name="email"
                           placeholder="eg. abc@gmail.com"
                           type="email"
                           onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                         />
                       </FormGroup>
                     </Col>
                 </Row>
                 <FormGroup>
           <label for="exampleText">Messege</label>
            <Input
            placeholder="Enter Messege"
            id="desc"
            name="desc"
            style={{height:150}}
            type="textarea"
            onChange={(e) => setMsg({ ...msg, issue: e.target.value })}
            />
  </FormGroup>
  <Container>
        <Button type="submit" color="success" outline onClick={handleform}> Submit </Button>
        <Button color="warning ml-2" type="reset" outline>Clear </Button>
            </Container>
            </Form>

        </Fragment>
       </div>
      );
};

export default  Contact;