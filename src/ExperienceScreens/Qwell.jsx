import React from 'react'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
const QwellPresentation = () => {
    return (
      <div
        style={{
          position: 'relative',
          width: '45vw',
          height: 'auto',
          paddingTop: '56.2500%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
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
    );
  };
export default function Qwell() {
    const [LightMode] = useContext(AppContext)

    useEffect(() => {
      if (LightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [LightMode]);
    return (
    <div style = {{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
    <h1 style = {{color: LightMode ? '#5596e6': '#3BBA9C', fontSize: '3rem', marginTop: '5%'}}> Qwell </h1>
    <p  style = {{color: LightMode ? 'black': 'white', fontSize: '1.2rem', width: '50vw', marginTop: '0%'}}> Qwell is an Austin based non-profit that connects LGBTQ+ members to local friendly businesses. As part of TXConvergent, our team helped build a mobile application for them using React Native and SupaBase for development and Figma for design </p>
    <div style = {{marginTop: '2.5%'}}>
        <QwellPresentation/>
      </div>
    </div>
    )
}

