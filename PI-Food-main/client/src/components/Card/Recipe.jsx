import React from "react";
import c from './Recipe.module.css'
import { NavLink } from 'react-router-dom';


export default function Recipe({ id, name, diets ,dietTypes, image, healthScore }) {

    const dietsList = dietTypes?.map((e) => e + " | ")
    let diet = []
    if ( diets ) {
        diet = diets.map((e) => e.name + " | ")
    }
    return (

        
        <div className={c.container}>
            <div className="card_content">
            <span className={c.title}>{name}</span>
            <div >
                <img className={c.imgContainer} src={image} alt={name} />
            </div>
            <div className={c.detailContainer}>
                {dietsList ? <span className={c.detailInfo}>Diets: {dietsList}</span>:<span className={c.detailInfo}>Diets: {diet}</span>}
                    
                    
                    <span className={c.detailInfo}>HealthScore: {healthScore}</span>
                </div>
                <div className={c.linkContainer}>
                    <NavLink to={`recipes/${id}`}>View Recipe</NavLink>
                </div> 
       </div> </div>


    ) 
 }