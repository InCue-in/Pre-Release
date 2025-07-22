import Sidebar from "../components/sidebar"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "./About"
import ScrollVisualizer from "../components/ScrollVisualizer"
import StarBackground from "../components/StarBackground"
import { useRef, useState } from "react"
import Progress from "./Progress"
import Testimonials from "./Testimonials"
import Team from "./Team"
import Contact from "./Contact"

export default function Home() {
    const scrollRef = useRef();

    return (
        <>
        <StarBackground></StarBackground>
        <div className="w-[100vw] h-screen flex flex-col
        justify-between items-center">
            <div className="flex flex-col space-y-4 w-[98vw]">
            <Nav></Nav>
            </div>
            <div className="flex justify-between items-center w-[99vw]">
            <Sidebar scrollRef={scrollRef}></Sidebar>
            <ScrollVisualizer scrollRef={scrollRef}></ScrollVisualizer>
            </div>

            <div className=""/> {/*Struture Implementation using Justify Between
            Mention elements to align at bottom*/}
            <div className="hidden justify-between items-center w-[99vw]">
            <Footer></Footer>
            </div>

        </div>
        <div className="absolute top-0 left-0 w-screen h-screen 
        flex justify-center items-center">
            <div id="ScrollBox" ref={scrollRef} className="m-auto h-[100vh] w-[100vw] sm:w-full overflow-y-scroll scrollbar-hide
            ">  
                <Hero></Hero>
                <About></About>
                <Progress></Progress>
                <Testimonials></Testimonials>
                <Team></Team>
                <Contact></Contact>
            </div>

        </div>
        </>
    )
}