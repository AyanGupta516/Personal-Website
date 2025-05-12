import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {useState} from 'react';
// import ReactGoogleSlides from "react-google-slides";
import { useNavigate } from 'react-router-dom';



export default function BasicCard({title, imageURL, dates, description, media, type, link}) {
  const navigate = useNavigate();


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
  else if (type === 'health') {
    return (
      <img
      style={{marginLeft: '30%', height: '125%', width: '50%'}}
      src={media}
      loading="lazy"
      alt=""
      />
  );
  }
  else if (type === 'ResearchImage') {
    return (
      <img
      style={{ height: '100%', width: '80%', border: 'solid #000' }}
      src={media}
      loading="lazy"
      alt=""
      />
  );
  }
  else if (type === 'QuestSlideshow') {
  //   return <ReactGoogleSlides
  //   width='100%'
  //   height='100%'
  //   slidesLink="https://docs.google.com/presentation/d/19DyWyPqF6YeVp7Qv8iMvSZc1MfaJD84fBETd430PHCo/edit?usp=sharing"
  //   position={0}
  //   showControls
  //   loop
  // />;
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
      style={{ height: '100%', width: '100%', border: 'solid #000' }}
      src={media}
      loading="lazy"
      alt=""
      />
    )
  }
  else if (type === 'SE' || type == 'Pintos') {
    return (
      <img
        style={{ height: '100%', width: '100%', border: 'solid #000' }}
        src={media}
        loading="lazy"
        alt=""
        />
      )
  }
  else if (type === 'Cura') {
    return (
      <div style={{
        position: 'relative', 
        width: '100%', 
        height: 0, 
        paddingTop: '56.25%', 
        paddingBottom: 0, 
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
        marginTop: '1.6em', 
        marginBottom: '0.9em', 
        overflow: 'hidden', 
        borderRadius: '8px', 
        willChange: 'transform'
      }}>
        <iframe 
          loading="lazy" 
          style={{
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            top: 0, 
            left: 0, 
            border: 'none', 
            padding: 0, 
            margin: 0
          }}
          src="https://www.canva.com/design/DAGDFWFyJck/whiLNdQ3-fKoISHiMpU9UQ/view?embed" 
          allowFullScreen 
        >
        </iframe>
      </div>
    )
  }
}

  return (
  <>
    <Card sx={{ width: 460, height: 360 }}>
      <div>
        <Typography level="title-lg"> {title} </Typography>
        <Typography level="body-sm"> {dates} </Typography>
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
        <Button  onClick = {() => navigate(`/Projects/${link}`)} onMouseEnter={() => handleHovered(title)}  onMouseLeave={() => removehover()} style = {{color: (isHovered === title) ? '#a6c7f1' : '#5596e6', border: 'solid', padding: '.5rem', borderRadius: '10px', backgroundColor: '#eaf4fd'}}>
          Learn More 
        </Button>
      </CardContent>
    </Card>
  </>
  );
}