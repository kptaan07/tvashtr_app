import React from 'react'
import appwriteService from "../appwrite/config"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
import { useSpring, animated } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import pexelsImage from "../assets/pexels-photo-1276518.jpeg"

function Home() {
  const parallaxRef = React.useRef(null);

  // Define a parallax configuration
  const parallaxProps = useSpring({
    from: { scrollPosition: 0 },
    to: { scrollPosition: window.innerHeight },
    config: { duration: 2000 },
    scroll: (val) => {
      parallaxRef.current.scrollTo(val.scrollPosition.to(window.innerHeight, (v) => v / 10));
    },
  });
  return (
      <div  className="bg-black text-red-200 h-96 w-full">
        <div className="flex">
          <h1 className='text-4xl text-green-600 font-bold '>This is Tvashtr!</h1>
        </div>
      </div>
  )
}

export default Home