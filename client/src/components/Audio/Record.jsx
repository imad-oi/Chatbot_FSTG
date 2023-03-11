import axios from 'axios';
import React, { useState } from 'react';
import { ReactMic } from "react-mic";



const Record = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState(null);

    
    const startRecording = () => {
        setIsRecording(true);
    };
    
    const stopRecording = () => {
        setIsRecording(false);
    };
    
    const onData = (recordedData) => {
        setAudioData(recordedData);
        console.log("ondata", recordedData) ; 
    };
    
    const onStop = (recordedData) => {
        setAudioData(recordedData);
        console.log("onStop", recordedData) ; 

        // Envoyer le fichier audio au serveur pour la transcription ici
        uploadAudioFile(recordedData) ; 
    };

    const uploadAudioFile = async (audioData) => {
        const formData = new FormData();
        formData.append("audio", audioData.blob, "recording.wav");
        const response = await axios.post("http://localhost:5000/api/transcribe", formData);
        console.log(response);
        return response.data;
    };
    

    


  return (
    <div>
      <button className='btn btn-primary' onClick={startRecording}>Démarrer l'enregistrement</button>
      <button className='btn btn-danger' onClick={stopRecording}>Arrêter l'enregistrement</button>
      <ReactMic
        record={isRecording}
        onData={onData}
        onStop={onStop}
        mimeType="audio/wav"
        // strokeColor="#000000"
        // backgroundColor="#FF4081"
      />
    </div>
  )
}

export default Record