import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail, pageDetail, deteleRecipe } from '../../redux/actions/index';
import './RecipeDetail.css';

 
export default function RecipeDetail(props) {

    const id = props.match.params.id;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getRecipeDetail(id))
        
        return () => {
            dispatch(pageDetail())
        }
    }, [dispatch])

    function recipeDelete() {
        dispatch(deteleRecipe(id))
        alert('Recipe deleted')
        history.push('/home')
    }
    

    const recipeDetail = useSelector((state) => state.recipeDetail)
    console.log(recipeDetail);
    const dietsTypes = recipeDetail.diets?.map((e) => e + " | ")
    return (
        <div className="img-fondo">
            {Array.isArray(recipeDetail)?
            recipeDetail.map ((e) => {return (
            <div className="firstDetailsContainer">
            
            
            <div className="imgDetailContainer">
            <img src={e.image} className="recipeImgBg"></img> </div>
            <div className="details-container">
                    {id.length > 15 ? (
                        <button className="deleteRecipe" onClick={() => recipeDelete()}>X</button>
                    ) : null}
            <p className="recipeDetailName">{e.name}</p>
            <p className="recipeDetailHealthScore">{e.healthScore}</p>
            <p className="recipeDetailDiets">{e.diets[0]?.name} || {e.diets[1]?.name} {e.diets[2]?.name}
            </p>

            <button className="backToHome" onClick={() => history.goBack()}>Back to Home</button>
             </div>
            <div className="secondDetailsContainer">{e.summary}</div>
            <p >{e.stepByStep} </p>
           
           
            </div>  )

        }): 
            <div className="firstDetailsContainer">
                <div className="imgDetailContainer">
                    <img src={recipeDetail.image} alt="recipeImage" className="recipeImgBg" />
                </div>
                <div className="details-container">
                    {id.length > 15 ? (
                        <button className="deleteRecipe" onClick={() => recipeDelete()}>X</button>
                    ) : null}
                    <p className="recipeDetailName">{recipeDetail.name}</p>
                    <p className="recipeDetailHealthScore">HealthScore: {recipeDetail.healthScore}</p>
                    <p className="recipeDetailDiets">Diets Types: {recipeDetail.dietTypes}</p>
                    <button className="backToHome" onClick={() => history.goBack()}>Back to Home</button>
                </div>

            </div>}
            <div className="secondDetailsContainer">
                <p className="recipeDetailSummary" dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}></p>
                {recipeDetail.steps?.map((el) => {
                    return (
                        <p key={el.number}>{el.number + " " + el.step}</p>
                    )
                })}
            </div>
        </div>

    )
}

