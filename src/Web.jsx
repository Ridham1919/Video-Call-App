import React, { useCallback, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Web = () => {
    const [value, setvalue] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(()=>{
        if(value){
           navigate(`/room/${value}`)
        }
    }, [navigate,value])

    return (
        <div>
            <input type="text"value={value}placeholder='Enter Room Code' onChange={(e)=>setvalue(e.target.value)} />
            <button onClick={handleJoinRoom} style={{marginLeft:10}} >join</button>
        </div>
    );
}

export default Web