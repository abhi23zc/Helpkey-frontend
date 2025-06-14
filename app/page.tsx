"use client"
import { useState } from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import FeaturedDestination from "./_components/FeaturedDestination";
import ExclusiveOffers from "./_components/ExclusiveOffers";
import Testimonial from "./_components/Testimonial";
import NewsLetter from "./_components/NewsLetter";

export default function Home() {
    return (
   <>
    <Navbar/>
    <Hero/>
    <FeaturedDestination/>
    <ExclusiveOffers/>
    <Testimonial/>
    <NewsLetter/>
    
   </>
  );
}

// next js -> server , client 
// react js -> client