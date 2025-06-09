"use client"
import { useState } from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import FeaturedDestination from "./_components/FeaturedDestination";

export default function Home() {
    return (
   <>
    <Navbar/>
    <Hero/>
    <FeaturedDestination/>
   </>
  );
}

// next js -> server , client 
// react js -> client