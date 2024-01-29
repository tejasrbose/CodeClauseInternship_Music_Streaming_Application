import React, { useState } from 'react';
import { Fragment } from 'react';
import { ToastContainer,toast} from 'react-toastify';
import { Form, FormGroup, Input,Container,Button ,Label,Row,Col} from "reactstrap";
import { ReactComponent as Songlogo } from '../img/music-svgrepo-com.svg';
import axios from 'axios';
import base_url from '../api/bootapi';
const CreateNewSongs=()=>{

  const genres = ['Romance', 'Thrill', 'Sad', 'Pop', 'Party', 'Concentration','Fitness/Upbeat'];
     const [song, setSong] = useState({});
     const [audioFile, setAudioFile] = useState(null);
     const [imageFile, setImageFile] = useState(null);

    const handleform =(e)=>{
      console.log(song);
      postSongToServer(song);
      e.preventDefault();
    }

     const handleImgUplode=()=>{
      uploadImgFile(imageFile);
     }

     const handleAudioUplode=()=>{
        uploadAudioFile(audioFile)
     }

     const uploadImgFile = (file) => {
      if(file!=null)
      {
      const formData = new FormData();
      formData.append('imgfile', file);
      axios.post(`${base_url}/addimg`, formData).then(
        (response) => {
          console.log(response.data);
          setSong({ ...song, img: response.data })
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

    const uploadAudioFile = (file) => {
      if(file!=null)
      {
      const formData = new FormData();
      formData.append('songfile', file);
      axios.post(`${base_url}/addsong`, formData).then(
        (response) => {
          console.log(response.data);
          setSong({ ...song, fileId: response.data })
          toast.success("File uploaded successfully", { position: "top-center" });
        },
        (error) => {
          console.log(error);
          toast.error("Something went wrong with file upload", { position: "top-center" });
        }
      );
      }
      else{
        console.log("Invalid data. Please fill in all fields.");
        toast.warning("Invalid data. Please Select the file.", { position: "top-center" });
      }
    }

    const postSongToServer=(data)=>{
      if(data.id && data.title && data.artist && data.genre)
      {
         axios.post(`${base_url}/addaudio`,song).then(
          (response) => {
            console.log(response);
            toast.success("Song Added Successfully", { position: "top-center" });
            
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

     
  

     const handleFileChange = (e, fileType) => {
      const file = e.target.files[0];
      if (fileType === 'audio') {
        setAudioFile(file);
      } else if (fileType === 'image') {
        setImageFile(file);
      }
    };

     

    return(
        <div className='addSong'>
            <div>
               <Songlogo/>
            </div>
       
       <Fragment>
       <h1>Add Song to the Repository</h1>
       <Form className='songForm' onSubmit={handleform} >
        
       <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="SongId">
          Song ID
        </Label>
        <Input
          id="id"
          bsSize="lg"
          name="id"
          placeholder="eg. 123,1001,..."
          type="text"
          onChange={(e) => setSong({ ...song, id: e.target.value })}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Song Name">
          Song Name
        </Label>
        <Input
          id="title"
          bsSize="lg"
          name="title"
          placeholder="eg. Animal, Skyfall..."
          type="text"
          onChange={(e) => setSong({ ...song, title: e.target.value })}
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
  <FormGroup>
    <Label for="ArtistName">
      Artist Name
    </Label>
    <Input
      bsSize="lg"
      id="artist"
      name="artist"
      type='text'
      placeholder="eg. Dia Lupa, Arijit Singh...."
      onChange={(e) => setSong({ ...song, artist: e.target.value })}
    />
  </FormGroup>
  </Col>
  <Col md={4}>
  <FormGroup>
            <Label for="Genre">Song Genre</Label>
            <Input
              bsSize="lg"
              id="genre"
              name="genre"
              type='select'
              onChange={(e) => setSong({ ...song, genre: e.target.value })}
            >
              <option value="" disabled>Select Genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </Input>
          </FormGroup>
  </Col>
  <Col md={4}>
  <FormGroup>
    <Label for="PlayList id">
      Playlist id
    </Label>
    <Input
      bsSize="lg"
      id="playlistId"
      name="playlistId"
      type='text'
      placeholder="eg. 123, 101...."
      onChange={(e) => setSong({ ...song, playlistId: e.target.value })}
    />
  </FormGroup>
  </Col>
  </Row>
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
        <Button color="success" onClick={handleImgUplode} outline >
        Uplode Image
      </Button>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="SongFile">
          Song File
        </Label>
        <Input
          id="songfile"
          bsSize="lg"
          name="songfile"
          type='file'
          onChange={(e) => handleFileChange(e, 'audio')}
        />
        <Button color="success" onClick={handleAudioUplode} outline >
        Uplode audioFile
      </Button>
      </FormGroup>
    </Col>
   
  </Row>
      <Container className='Button'>
      <Button color="success" outline type="submit">
        Add Song
      </Button>
      <Button color="warning ml-2" style={{width:100,marginLeft:20}} type="reset" outline>Clear </Button>
      </Container>
    </Form>

       </Fragment>
       
       </div>

    );
};
export default CreateNewSongs;
