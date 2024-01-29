import React, { useState } from 'react';
import { Fragment } from 'react';
import { ToastContainer,toast} from 'react-toastify';
import { Form, FormGroup, Input,Container,Button ,Label,Row,Col} from "reactstrap";
import { ReactComponent as Playlistlogo } from '../img/playlist-svgrepo-com.svg';
import axios from 'axios';
import base_url from '../api/bootapi';

const CreatePlayList=()=>{

 
  const genres = ['Romance', 'Thrill', 'Sad', 'Pop', 'Party', 'Concentration','Fitness/Upbeat'];
  const categories = [
    { id: 1, name: 'Romance' },
    { id: 2, name: 'Focus' },
    {
      id:3,
      name: 'Sad '  },
  {
      id:4,
      name: 'Party',},
  {
      id:5,
      name: 'Thrill',
  },
  {
       id:6,
       name: 'Fiteness/upbeat',
  }
  ];
  
    const handleform =(e)=>{
        console.log(playList);
        postPlayListToServer(playList);
        e.preventDefault();
      }

      const handleImgUplode=()=>{
        uploadImgFile(imageFile);
       }
    
      
       const postPlayListToServer=(data)=>{
        if(data.playlistId&& data.playlistName && data.playlistGenre)
        {
           axios.post(`${base_url}/makeplaylist`,playList).then(
            (response) => {
              console.log(response);
              toast.success("PlayList Created Successfully", { position: "top-center" });
              
            },
            (error) => {
              console.log(error);
              toast.error("Something went Wrong!!", { position: "top-center" });
            }
           );
        }
        else{
          console.log("Invalid data. Please fill in all fields.");
          toast.warning("Invalid data. Please fill in all fields.", { position: "top-center" });
        }
      } 





       const uploadImgFile = (file) => {
        if(file!=null)
        {
        const formData = new FormData();
        formData.append('imgfile', file);
        axios.post(`${base_url}/addimg`, formData).then(
          (response) => {
            console.log(response.data);
            setPlayList({ ...playList, img: response.data })
            toast.success("File uploaded successfully", { position: "top-center" });
          },
          (error) => {
            console.log(error);
            toast.error("Something went wrong with file upload", { position: "top-center" });
          }
        );
        }else{
          console.log("Invalid data. Please fill in all fields.");
          toast.warning("Invalid data. Please Select the file.", { position: "top-center" });
        }
      }


    const[playList, setPlayList]=useState({});
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];
        if (fileType === 'image') {
          setImageFile(file);
        }
      };

    return(

        <div className='addSong'>
        <div>
        <Playlistlogo/>
        </div>
   
   <Fragment>
   <h1>Create Playlist</h1>
   <Form className='songForm' onSubmit={handleform} >
    
   <Row>
<Col md={6}>
  <FormGroup>
    <Label for="PlayListId">
      PlayList ID
    </Label>
    <Input
      id="playlistId"
      bsSize="lg"
      name="playlistId"
      placeholder="eg. 123,1001,..."
      type="text"
      onChange={(e) => setPlayList({ ...playList, playlistId: e.target.value })}
    />
  </FormGroup>
</Col>
<Col md={6}>
  <FormGroup>
    <Label for="PlayList Name">
      PlayList Name
    </Label>
    <Input
      id="playlistName"
      bsSize="lg"
      name="playlistName"
      placeholder="eg. Animal, Skyfall..."
      type="text"
      onChange={(e) => setPlayList({ ...playList, playlistName: e.target.value })}
    />
  </FormGroup>
</Col>
</Row>
<FormGroup>
            <Label for="Category">Category</Label>
            <Input
              bsSize="lg"
              id="catId"
              name="catId"
              type='select'
              onChange={(e) => setPlayList({ ...playList, catId: e.target.value })}
            >
              <option value="" disabled>Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Input>
          </FormGroup>
<FormGroup>
            <Label for="Genre">PlayList Genre</Label>
            <Input
              bsSize="lg"
              id="playlistGenre"
              name="playlistGenre"
              type='select'
              onChange={(e) => setPlayList({ ...playList, playlistGenre: e.target.value })}
            >
              <option value="" disabled>Select Genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </Input>
          </FormGroup>
<Row>
<Col md={6}>
  <FormGroup>
    <Label for="img">
      Image
    </Label>
    <Input
    bsSize="lg"
      id="img"
      name="img"
      type='file'
      onChange={(e) => handleFileChange(e, 'image')}
    />
    <Button color="success"  outline  onClick={handleImgUplode}>
    Uplode Image
  </Button>
  </FormGroup>
</Col>

</Row>
  <Container className='Button'>
  <Button color="success" outline type="submit">
     Create PlayList
  </Button>
  <Button color="warning ml-2" style={{width:100,marginLeft:20}} type="reset" outline>Clear </Button>
  </Container>
</Form>

   </Fragment>
   
   </div>

    );
};
export default CreatePlayList;