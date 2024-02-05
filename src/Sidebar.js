import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Accordion, AccordionBody, AccordionHeader, Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "./utils";
import close from "./Resources/delete-sign.png"



const Sidebar = (props) => {

    

    const containerRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true)
        // setIsScrolling(prevIsScrolling => !prevIsScrolling)
        // console.log(isScrolling)
    }
        
    const handleMouseLeave = () => {
        setIsMouseOver(false)
        // setIsScrolling(prevIsScrolling => !prevIsScrolling);
      };

      const handleScroll = (e) => {
            // if (isScrolling) {containerRef.current.scrollTop += e.deltaY;}
            console.log(containerRef.current.scrollTop)
            console.log(e.deltaY)
      }
        
      console.log(isMouseOver)
        return (
            
                <nav className="sidebar"
                style = {props.style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleScroll}
                ref={containerRef} 
                
                
                >
                        <div className="sidebar-top">
                        <h2>Filter recipes</h2>
                            <img src={close}></img>
                        </div>
                   
                       

                        <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Spice Level</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>

                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="accordion-header"><h2 className="subtitles-accordion">Difficulty</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Cost Level</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                        </AccordionBody>
                </Accordion>

                </nav>

          


        );
    
};
export default Sidebar;