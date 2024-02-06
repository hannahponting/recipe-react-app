import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Sidebar.css";
import { RecipeFilter } from "../FilterBar/RecipeFilter";
import { Accordion, AccordionBody, AccordionHeader, Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "../../utils";
import close from "../../Resources/delete-sign.png"


const Sidebar = (props) => {

    

    const containerRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [formData, setFormData] = useState({
            spice_level :"",
            difficulty : "",
            cost : ""


    })

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            return (    

                { ...prevFormData,
                    [event.target.name] : event.target.value
                
                
                })
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    console.log(formData)


    // const handleMouseEnter = () => {
    //     setIsMouseOver(true)
    //     // setIsScrolling(prevIsScrolling => !prevIsScrolling)
    //     // console.log(isScrolling)
    // }
        
    // const handleMouseLeave = () => {
    //     setIsMouseOver(false)
    //     // setIsScrolling(prevIsScrolling => !prevIsScrolling);
    //   };

      const handleScroll = (e) => {
            // if (isScrolling) {containerRef.current.scrollTop += e.deltaY;}
            // console.log(containerRef.current.scrollTop)
            // console.log(e.deltaY)
      }
        
    //   console.log(isMouseOver)
        return (
                <form onSubmit={handleSubmit} className="sidebar"
                style = {props.style}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // onWheel={handleScroll}
                ref={containerRef} 
                
                >
                <nav 
               
                
                
                >
                        <div className="sidebar-top">
                        <h2>Filter recipes</h2>
                            <button className="sidebar-close-button" onClick={props.closeSidebar}><img className="sidebar-close-img" src={close}></img> </button>
                        </div>
                   
                       

                        <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Spice Level</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Spice</h3>
                    <label><input type='radio' name="spice_level" value="NONE" onChange={handleChange}></input>None</label>
                    <br></br>
                   <label><input type='radio' name="spice_level" value="MILD" onChange={handleChange}></input>Mild</label>
                    <br></br>
                   <label><input type='radio' name="spice_level" value="MEDIUM" onChange={handleChange}></input>Medium</label>
                   <br></br>
                   <label><input type='radio' name="spice_level" value="SPICY" onChange={handleChange}></input>Spicey</label>
                   <br></br>
                   <label><input type='radio' name="spice_level" value="" onChange={handleChange}></input>Any</label>
                        </AccordionBody>
                </Accordion>

                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="accordion-header"><h2 className="subtitles-accordion">Difficulty</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                    <h3 id="subtitles-accordion">Difficulty</h3>
                    <label><input type='radio' name="difficulty" value="EASY" onChange={handleChange}></input>Easy</label>
                    <br></br>
                    <label><input type='radio' name="difficulty" value="MODERATE" onChange={handleChange}></input>Moderate</label>
                    <br></br>
                    <label><input type='radio' name="difficulty" value="H" onChange={handleChange}></input>High</label>
                    <br></br>
                    <label><input type='radio' name="difficulty" value="" onChange={handleChange}></input>Any</label>
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Cost Level</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                    <h3 id="subtitles-accordion">Cost</h3>
                    <label><input type='radio' name="cost" value ="LOW" onChange={handleChange}></input>Low</label>
                    <br></br>
                    <label><input type='radio' name="cost" value ="MODERATE" onChange={handleChange}></input>Moderate</label>
                    <br></br>
                    <label><input type='radio' name="cost" value ="PRICEY" onChange={handleChange}></input>Pricey</label>
                    <br></br>
                    <label><input type='radio' name="cost" value ="" onChange={handleChange}></input>Any</label>                      
                     </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Filter #</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
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
                

                <button  className="apply-filter-button" 
                
                onClick={() => {
                                const filterArray = {costType: formData.cost , difficultyLevel: formData.difficulty, spiceType : formData.spice_level};
                                {    console.log(filterArray)
                                }
                        props.applyFilters(filterArray);}}>


                        Apply Filters</button>

                </form>


        );
};
export default Sidebar;