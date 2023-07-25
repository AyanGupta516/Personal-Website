import React from 'react'
export default function SE() {
    return (
        <div>
            <h1 style = {{color: '#3BBA9C', position: 'absolute', top: '7.5%', left:'50%', transform: 'translateX(-50%)', width: '1250px'}}> System Emulator </h1>
            <ul style = {{textAlign: 'left', listStyle: 'disc', marginLeft: '-25px', width: '1250px', marginTop: '-100px'}}>
                    <li style = {{color: 'lightgrey', fontSize: '20px', marginBottom: '40px'}}> Using C, I implemented a basic System Emulator that processed Assembly instructions and replicated a cache system</li>
                    <li style = {{color: 'lightgrey', fontSize: '20px', marginBottom: '40px'}}> I implemented Instruction Pipelining, including fetching, decoding, and excuting assembly instructions that were given. In addition, I handled any data or control hazards that arised while processing </li>
                    <li style = {{color: 'lightgrey', fontSize: '20px', marginBottom: '40px'}}> In addition I implemented a basic cache system, that used the LRU policy to evict and bring in new cache lines into the cache </li>
                </ul>
        </div>
    )
}