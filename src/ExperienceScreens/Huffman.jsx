import React from 'react'
import Image from '../assets/Huffman.png'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
export default function Huffman() {
    const [LightMode] = useContext(AppContext)

    useEffect(() => {
      if (LightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [LightMode]);
    return (
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <h1 style = {{color: LightMode ? '#5596e6': '#3BBA9C', width: '75%',marginTop: '5%',fontSize: '3rem'}}> Huffman Encoding </h1>
            <ul style = {{textAlign: 'left', listStyle: 'disc', paddingLeft: '2.5%', width: '100%'}}>
                    <li style = {{color: LightMode ? 'black' : 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Using Java, I implemented Huffman's Compression & Decompression Algorithim, which encondes more common characters with less bits</li>
                    <li style = {{color: LightMode ? 'black' : 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> I constructed a Huffman tree, by reading 8 bits at a time, and storing the frequencies of characters to create new encondings. </li>
                    <li style = {{color: LightMode ? 'black' : 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> To compress, I traversed the Huffman Tree, and wrote new encondings to an output file that was the compressed document version. </li>
                    <li style = {{color: LightMode ? 'black' : 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Files could be compressed or decompressed using a simple GUI </li>
                </ul>
                <img src = {Image} style = {{width: '50%', height: '30%', marginTop: '0%'}} />
        </div>
    )
}