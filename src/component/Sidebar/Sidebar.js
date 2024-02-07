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
    const [filterValues, setFilterValues] = useState({
            spice_level :"",
            difficulty : "",
            cost : "",
            mealType: "",
            cuisineType: "",
            servingNo: "",
            cookingMinutes: ""
    })

    const handleChange = (event) => {
        setFilterValues((prevFormData) => {
            return (    

                { ...prevFormData,
                    [event.target.name] : event.target.value
                
                
                })
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }



    const applyFiltersHandler = () => {
        const filterArray = {
            costType: { value: filterValues.cost, comparison: '=' },
            difficultyLevel: { value: filterValues.difficulty, comparison: '=' },
            spiceType: { value: filterValues.spice_level, comparison: '=' },
            mealType: { value: filterValues.mealType, comparison: '=' },
            cuisineType: {value: filterValues.cuisineType, comparison: '='},
            servingNo: {value: filterValues.servingNo, comparison: '>='},
            cookingMinutes: {value: filterValues.cookingMinutes, comparison: '<='}

        };
        props.applyFilters(filterArray);
    }
        


  
     
        
        return (
                <form onSubmit={handleSubmit} className="sidebar"
                style = {props.style}
                onMouseEnter={props.handleMouseEnter}
                onMouseLeave={props.handleMouseLeave}
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
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Meal</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                    <h3 id="subtitles-accordion">Meal</h3>
                    <input type='radio' name="mealType" value="BREAKFAST" onChange={handleChange} /> Breakfast
                    <br></br>
                <input type='radio' name="mealType" value="LUNCH" onChange={handleChange} /> Lunch
                    <br></br>
                <input type='radio' name="mealType" value="DINNER" onChange={handleChange} /> Dinner
                    <br></br>
                <input type='radio' name="mealType" value="" onChange={handleChange} /> Any
                                       </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Cuisine</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Cuisine</h3>
                        <input type='radio' name="cuisineType" value="AMERICAN" onChange={handleChange} /> American
                <br></br>
                <input type='radio' name="cuisineType" value="ASIAN" onChange={handleChange} /> Asian
                <br></br>
                <input type='radio' name="cuisineType" value="BRITISH" onChange={handleChange} /> British
                <br></br>
                <input type='radio' name="cuisineType" value="FRENCH" onChange={handleChange} /> French
                <br></br>
                <input type='radio' name="cuisineType" value="INDIAN" onChange={handleChange} /> Indian
                <br></br>
                <input type='radio' name="cuisineType" value="INTERNATIONAL" onChange={handleChange} /> International
                <br></br>
                <input type='radio' name="cuisineType" value="ITALIAN" onChange={handleChange} /> Italian
                <br></br>
                <input type='radio' name="cuisineType" value="MEDITERRANEAN" onChange={handleChange} /> Mediterranean
                <br></br>
                <input type='radio' name="cuisineType" value="MEXICAN" onChange={handleChange} /> Mexican
                <br></br>
                <input type='radio' name="cuisineType" value="SPANISH" onChange={handleChange} /> Spanish
                <br></br>
                <input type='radio' name="cuisineType" value="" onChange={handleChange} /> Any
                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Minimum Servings</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Minimum Servings</h3>
                        <input type='number' name="servingNo" value={filterValues.servingNo} onChange={handleChange} />

                        </AccordionBody>
                </Accordion>
                <Accordion className="sidebar-accordion">
                    <AccordionHeader className="sidebar-accordion-header"><h2 className="subtitles-accordion">Minutes to Prepare</h2></AccordionHeader>
                    <AccordionBody className="sidebar-accordion-body" >
                        <h3 id="subtitles-accordion">Minutes to Prepare</h3>
                        <input type='number' name="cookingMinutes" value={filterValues.cookingMinutes} onChange={handleChange} />

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
                
                onClick= {()=> {applyFiltersHandler(); props.closeSidebar();}}>


                        Apply Filters</button>

                </form>
        )

        }
export default Sidebar;


// () => {
//     const filterArray = {costType: formData.cost , difficultyLevel: formData.difficulty, spiceType : formData.spice_level, mealType: formData.mealType};
//     {    console.log(filterArray)
//     }
// props.applyFilters(filterArray);}