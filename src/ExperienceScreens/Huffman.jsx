import React from 'react'
import Image from '../assets/Huffman.png'
export default function Huffman() {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <h1 style = {{color: '#3BBA9C', width: '75vw', marginTop: '-10%'}}> Huffman Compression & Decompression Algorithim </h1>
            <ul style = {{textAlign: 'left', listStyle: 'disc', marginLeft: '-25px', width: '1250px', marginTop: '-225px'}}>
                    <li style = {{color: 'lightgrey', fontSize: '18px', marginBottom: '20px'}}> Using Java, I implemented Huffman's Compression & Decompression Algorithim, which encondes more common characters with less bits</li>
                    <li style = {{color: 'lightgrey', fontSize: '18px', marginBottom: '20px'}}> I constructed a Huffman tree, by reading 8 bits at a time, and storing the frequencies of characters to create new encondings. </li>
                    <li style = {{color: 'lightgrey', fontSize: '18px', marginBottom: '20px'}}> To compress, I traversed the Huffman Tree, and wrote new encondings to an output file that was the compressed document version. </li>
                    <li style = {{color: 'lightgrey', fontSize: '18px', marginBottom: '20px'}}> Files could be compressed or decompressed using a simple GUI </li>
                </ul>
                <img src = {Image} style = {{width: '600px', height: '400px', position: 'absolute', left:'50%', transform: 'translateX(-50%)', top: '47.5%'}} />
        </div>
    )
}