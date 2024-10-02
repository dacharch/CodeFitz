import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';





import "./Hero.css"


const Hero = () => {
  const [show,setShow] = useState(false) ; 
  const [open, setOpen] = useState(false);
  const [fullName,setFullName] = useState() ;
  const [phone,setPhoneNumber] = useState() ;
  const[email,setEmailName] = useState() ;
  const [message,setMessage] = useState() ;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
  const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

  const submit = () =>{
     
  }
   return (   
      <>
          <div id="Hero" className="hero-container">
           <p>
              We bring Customer for your brands<br /> and Products using Artifical <br />Intelligence
           </p>
           <button className="contact-btn" onClick={handleOpen}>
              Contact
           </button>
        </div>   

        <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}
          
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" gutterBottom>
            Contact Form
          </Typography>
          <form >
            <TextField
              fullWidth
              label="Name"
              name="name"
              onChange={(e)=>setFullName(e.target.value)}
              
            
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
          
              margin="normal"
              required
              onChange={(e)=>setEmailName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              margin="normal"
              onChange={(e)=>setPhoneNumber(e.target.value)}

            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              
              margin="normal"
              multiline
              rows={4}
              onChange={(e)=>setMessage(e.target.value)} 
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth

              onClick={submit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
        
      
      
      </>      
      
   );
}

export default Hero