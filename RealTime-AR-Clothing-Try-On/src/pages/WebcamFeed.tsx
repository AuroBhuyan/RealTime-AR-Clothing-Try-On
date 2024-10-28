// src/components/WebcamFeed.tsx
import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const WebcamFeed: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <button onClick={() => navigate('/')} style={{ position: 'absolute', top: '20px', left: '20px', padding: '8px 16px', cursor: 'pointer' }}>
        Back to Home
      </button>
      <Webcam
        ref={webcamRef}
        audio={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default WebcamFeed;
