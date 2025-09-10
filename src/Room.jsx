import React, { use, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { id } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
       if(meetingRef.current){
        const meeting = (element) =>{
           // generate Kit Token
      const appID = 1389631695 ;
      const serverSecret = "ed60136971f271e2eb17d6428353caa1";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),"Ridham Makwana");

    
     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `http://localhost:5174/room/${id}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONOneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


        }

        meeting(meetingRef.current)
       }
    }, []);

    return (
        <div>
            <div ref={meetingRef} style={{width:'100%', height:'400px'}}></div>
        </div>
    )
}

export default Room