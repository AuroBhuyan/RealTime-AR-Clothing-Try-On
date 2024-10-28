import React from "react"; 
import { useNavigate } from 'react-router-dom'; 

const LandingPage: React.FC = () => { 
  const navigate = useNavigate(); 

  const handleStartClick = () => { 
    navigate('/try-on'); 
  };

  return ( 
    <div className="flex flex-col items-center justify-center h-screen text-center p-5">
      <h1 className="text-2xl font-bold">Welcome to Real-Time AR Clothing Try-On</h1>
      <p className="mt-4">Experience virtual clothing fitting directly in your browser.</p>
      <button 
        onClick={handleStartClick} 
        className="mt-5 px-4 py-2 text-lg font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Start Try-On
      </button>
    </div>
  );
};

export default LandingPage; 
