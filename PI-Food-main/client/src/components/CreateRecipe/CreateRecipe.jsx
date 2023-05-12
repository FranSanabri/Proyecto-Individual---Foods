import React, { useEffect, useState } from "react";
import { createRecipe, getDietsList } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateRecipe.css';


export default function CreateRecipe() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState({
        name: '',
        healthScore: '1',
        summary: '',
        stepByStep: '',
        image: '',
        dietTypes: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.name){
            alert("Please enter a name")
        }else{
            dispatch(createRecipe({ ...input, stepByStep: input.steps  }))
            alert('Recipe Created')
            history.push("/home")
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleChangeDiets = (e) => {
        if (e.target.checked) {
            setInput({ ...input, dietTypes: [...input.dietTypes, e.target.value] })
        }
        if (!e.target.checked) {
            setInput({ ...input, diets: input.dietTypes.filter((d) => d !== e.target.value) })
        }
    }

    useEffect(() => {
        dispatch(getDietsList());
    }, [dispatch])

    const listDiets = useSelector((state) => state.dietList);
    const list = listDiets?.map((e) => e.name);


    const [validName, setValidName] = useState(true)
    const [validSummary, setValidSummary] = useState(true)
    const regexWhite = /^\s+$/

    function validateInput() {
        if (regexWhite.test(input.name) || input.name.length < 3 || input.name === ''){
            setValidName(false)
        }else{
            setValidName(true)
        }
        if (regexWhite.test(input.summary) || input.summary.length < 10 || input.summary === "") {
            setValidSummary(false)
        }else{
            setValidSummary(true)
        }
    }

    return (
        <div className="fullContainer">
            <div className="createContainer">
                    <form className="createForm" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            onBlur={()=> validateInput()} />
                            <span className="error-message">{!validName && "Enter a valid name"}</span>
                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="url"
                            name="image"
                            value={input.image}
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor="healthScore">Health Score:</label>
                        <input
                            type="number"
                            name="healthScore"
                            min={1} max={100}
                            value={input.healthScore}
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            type="text"
                            name="summary"
                            className="summaryInputCreate"
                            value={input.summary}
                            onChange={(e) => handleChange(e)}
                            onBlur={()=> validateInput()}
                            rows="3" cols="30" />
                        <span className="error-message">{!validSummary && "Summary required 10 characters min"}</span>
                        <label htmlFor="stepByStep">Steps:</label>
                        <textarea
                            type="text"
                            className="stepsInputCreate"
                            name="steps"
                            value={input.steps}
                            onChange={(e) => handleChange(e)}
                            rows="3" cols="30" />
                        <div className="dietsContainerCreate">
                            {list?.map((el) =>
                            (
                                <span key={el} >
                                    <input type="checkbox"
                                        name="dietTypes"
                                        className="dietListOpt"
                                        value={el} onChange={(e) => handleChangeDiets(e)} />
                                    <label>{el}</label>
                                </span>

                            ))}
                        </div>
                        <button type="submit" className="createRecipe" disabled={!validName || !validSummary}>Create Recipe</button>
                        <button type="button" className="goBackHome" onClick={() => { history.goBack() }}>BACK</button>
                    </form>
            </div>
        </div>
    );
}