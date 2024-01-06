import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import ReactGoogleSlides from "react-google-slides";



export default function BasicCard({title, imageURL, dates, description, modalDescription, media, type}) {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleLearnMoreClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [isHovered, setIsHovered] = useState(null)
  const handleHovered = (tab) => {
      setIsHovered(tab)
  }
  const removehover = () => {
      setIsHovered(null)
  }


  const renderMedia = () => {
    if (type === 'image') {
      return (
          <img
          style={{ height: '100%', width: '100%', border: 'solid #000' }}
          src={media}
          loading="lazy"
          alt=""
          />
      );
    }
    else if (type === 'ResearchImage') {
      return (
        <img
        style={{ height: '85%', width: '80%', border: 'solid #000' }}
        src={media}
        loading="lazy"
        alt=""
        />
    );
    }
    else if (type === 'QuestSlideshow') {
      return <ReactGoogleSlides
      width='100%'
      height={400}
      slidesLink="https://docs.google.com/presentation/d/19DyWyPqF6YeVp7Qv8iMvSZc1MfaJD84fBETd430PHCo/edit?usp=sharing"
      position={0}
      showControls
      loop
    />;
    }
    else if (type === 'Qwell') {
      return ( 
        <div
        style={{
          position: 'relative',
          width: '37.5vw',
          height: '2.5vh',
          paddingTop: '56.2500%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '15px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading= 'eager'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src={"https://www.canva.com/design/DAFpIqnWXoM/view?embed"}
          allowFullScreen
          allow="fullscreen"
        />
      </div>
      )
    }
    else if (type === 'Tennis') {
      return (
      <img
        style={{ height: '80%', width: '100%', border: 'solid #000' }}
        src={media}
        loading="lazy"
        alt=""
        />
      )
    }
    else if (type === 'SE') {
      return (
        <img
          style={{ height: '100%', width: '100%', border: 'solid #000' }}
          src={media}
          loading="lazy"
          alt=""
          />
        )
    }
  }




  return (
  <>
    <Card sx={{ width: 460, height: 360 }}>
      <div>
        <Typography level="title-lg"> {title} </Typography>
        <Typography level="body-sm"> {dates} </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          style={{ height: '100%', width: '100%' }}
          src= {imageURL}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent sx={{ textAlign: 'left' }}>
         <div>
          <Typography fontSize="sm" fontWeight="lg">
            {description} 
          </Typography>
        </div>
      </CardContent>
      <CardContent orientation="horizontal" >
        <Button  onClick = {handleLearnMoreClick} onMouseEnter={() => handleHovered(title)}  onMouseLeave={() => removehover()} style = {{color: (isHovered === title) ? '#a6c7f1' : '#5596e6', border: 'solid', padding: '.5rem', borderRadius: '10px', backgroundColor: '#eaf4fd'}}>
          Learn More 
        </Button>
      </CardContent>
    </Card>
    <Modal open={isModalOpen} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      border: '2px solid #000',
      boxShadow: 24,
      padding: '2rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      width: '70vw',
      display: 'flex', 
      flexDirection: 'column'
    }}
  >
      <Typography style = {{justifyContent: 'center', marginTop: '-32.5rem', fontSize: '32px', color: '#5596e6', maxHeight: '20%', position: 'absolute'}}>
        {title}
      </Typography>
      <Box style={{ width: '100%', display: 'flex', flexDirection: 'row', border: 'solid #FFF', marginTop: '1.5rem' }}>
      <Box style={{ width: '40%', textAlign: 'left', marginTop: '-3.5rem', marginRight: '10%'}}>
        <Typography style = {{marginBottom: '.5rem', fontSize: '20px', fontWeight: 'bold', marginTop: '27.5%'}}>
          Project Information:
        </Typography>
        <Typography style = {{fontColor: 'black', fontSize: '18px', marginTop: '5%'}}>
          {modalDescription}
        </Typography>
      </Box>
      <Box style={{ width: '50%', textAlign: 'left', marginTop: '5%', marginRight: '2.5%'}}>
          {renderMedia()}
      </Box> 
     </Box>
  </Box>
</Modal>
    
  </>
  );
}