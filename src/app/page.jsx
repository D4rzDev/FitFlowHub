"use client"
import React from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Healthplans from "@/components/Healthplans"
import Section from "@/components/Section"
import Trends from "@/components/Trends"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Healthplans/>
    <Section/>
    <Trends/>
    <Footer/>
    </>
  )
}
