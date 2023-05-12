import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail, pageDetail, deteleRecipe } from '../../redux/actions/index';
import './RecipeDetail.css';

 
export default function RecipeDetail(props) {

    const id = props.match.params.id;
    console.log(id);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log("hola");
        dispatch(getRecipeDetail(id))
        
        return () => {
            dispatch(pageDetail())
        }
    }, [id])

    function recipeDelete() {
        dispatch(deteleRecipe(id))
        alert('Recipe deleted')
        history.push('/home')
    }
    

    const recipeDetail = useSelector((state) => state.recipeDetail)
   console.log(recipeDetail); 
    /* const dietsTypes = []
    dietsTypes = recipeDetail.diets?.map((e) => e.name + " | ") */
   /* console.log(dietsTypes); */

    return (
        <div className="img-fondo">
            
            {Array.isArray(recipeDetail)?
            recipeDetail.map ((e) => {return (
            <div className="firstDetailsContainer">
            <div className="imgDetailContainer">
            <img src={e.image} className="recipeImgBg"></img> </div>
            <div className="details-container"> <p></p>
                    {id.length > 15 ? (
                        <button className="deleteRecipe" onClick={() => recipeDelete()}>X</button>
                    ) : null}
            <p className="recipeDetailName">{e.name}</p>
            <p className="recipeDetailHealthScore">{e.healthScore}</p>
            <p className="recipeDetailDiets">{recipeDetail[0].diets?.map((e) => e.name + " | ")}
            </p>

            <button className="backToHome" onClick={() => history.goBack()}>Back to Home</button>
             </div>

            <div className="containerDetailBD"> 
             <div className="secondDetailsContainer">{recipeDetail[0].summary}</div>
            <div className="secondDetailsContainer">{recipeDetail[0].stepByStep} </div>
           </div>
           
            </div>  )

        }): 
            <>
            <div className="firstDetailsContainer">
                <div className="imgDetailContainer">
                    <img src={recipeDetail.image} alt="recipeImage" className="recipeImgBg" />
                </div>
                <div className="details-container">
                    <p className="recipeDetailName">{recipeDetail.name}</p>
                    <p className="recipeDetailHealthScore">HealthScore: {recipeDetail.healthScore}</p>
                    <p className="recipeDetailDiets">Diets Types: {recipeDetail.dietTypes}</p>
                    <button className="backToHome" onClick={() => history.goBack()}>Back to Home</button>
                </div>

            </div>
            <div className="secondDetailsContainer"><p>Summary</p> 
                <p className="recipeDetailSummary" dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}></p><p>Step By Step</p>
                {recipeDetail.steps?.map((el) => {
                    return (
                        <p key={el.number}>{el.number + " " + el.step}</p>
                    )
                })}
            </div></>}
        </div>

    )
}

