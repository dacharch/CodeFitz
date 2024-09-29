import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';





import "./Hero.css"


const Hero = () => {
   const [show,setShow] = useState(false) ; 
   const [open, setOpen] = useState(false);
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
 
   return (   
      <>
          <div id="Hero" className="hero-container">
           <h1>
              We bring Customer for your brands<br /> and Products using Artifical <br />Intelligence
           </h1>
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
            width: 400,
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
              
            
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
          
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
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