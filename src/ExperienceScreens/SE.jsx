import React from 'react'
export default function SE() {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', aligItems: 'center', 'alignItems': 'center'}}>
            <h1 style = {{color: '#3BBA9C', width: '30vw', fontSize: '3rem', marginTop: '-20%'}}> System Emulator </h1>
            <ul style = {{textAlign: 'left', listStyle: 'disc', marginLeft: '-2.5%', width: '90vw'}}>
                    <li style = {{color: 'lightgrey', fontSize: '1.25rem', marginBottom: '3.5%'}}> Using C, I implemented a basic System Emulator that processed Assembly instructions and replicated a cache system</li>
                    <li style = {{color: 'lightgrey', fontSize: '1.25rem', marginBottom: '3.5%'}}> I implemented Instruction Pipelining, including fetching, decoding, and excuting assembly instructions that were given. In addition, I handled any data or control hazards that arised while processing </li>
                    <li style = {{color: 'lightgrey', fontSize: '1.25rem', marginBottom: '3.5%'}}> In addition I implemented a basic cache system, that used the LRU policy to evict and bring in new cache lines into the cache </li>
                </ul>
        </div>
    )
}