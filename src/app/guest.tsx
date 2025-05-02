import React from 'react';

import {Button} from '@mui/material';
import { signIn } from "next-auth/react";
import FloatingBox from '@/components/floatingbox';



export default function Home() {
  const cols = 5;
  const rows = 4;
  const minOpacity = 0.2; 
  const angle = 15; 

  return (
    <div className="bg-black">
 
      <style>{`
        @keyframes floatUpDownRotated {
          0%   { transform: rotate(${angle}deg) translateY(0); }
          50%  { transform: rotate(${angle}deg) translateY(-20px); }
          100% { transform: rotate(${angle}deg) translateY(0); }
        }
        @keyframes floatDownUpRotated {
          0%   { transform: rotate(${angle}deg) translateY(0); }
          50%  { transform: rotate(${angle}deg) translateY(20px); }
          100% { transform: rotate(${angle}deg) translateY(0); }
        }
      `}</style>

      <div className="flex h-screen items-center px-16 space-x-2 justify-center md:justify-between">

        <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-3 text-left">
          <div className="flex space-x-3">
            <span className="px-4 py-1 rounded-full bg-gray-800 text-white text-sm">100+ members</span>
            <span className="px-4 py-1 rounded-full bg-gray-800 text-white text-sm">3 countries</span>
          </div>
          <h1 className="text-5xl font-bold text-white">Swap Skills, Build Community</h1>
          <h2 className="text-3xl text-blue-400">Teach & Learn Anything</h2>
          <p className="text-gray-300">Meet, chat, and study with students ...</p>
          <Button sx={{ width: '200px' }} variant="contained" color="primary"
          onClick={() => signIn("discord", { callbackUrl: "/" })}>
            SWAP SKILLS NOW →
          </Button>
          <p />
          <Button size="small" sx={{ color: 'white', fontSize: '0.75rem'  }}onClick={() => signIn("discord", { callbackUrl: "/" })}>
            Don&apos;t have an account? Sign up for free!
          </Button>
        </div>

        <FloatingBox cols={cols} rows={rows} minOpacity={minOpacity} />
        
      </div>
    </div>
  );
}