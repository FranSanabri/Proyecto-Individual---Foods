import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiets, getDietsList, orderByHealth, orderByRecipe, filterCreated } from "../../redux/actions/index"
import './ToolBar.css'

export default function ToolBar({ setOrder, setCurrentPage }) {

    const dispatch = useDispatch();
    const dietList = useSelector((state) => state.dietList);
    const diestByName = dietList?.map((el) => el.name);
    useEffect(() => {
        dispatch(getDietsList());
    }, [dispatch])



    const handleChange = (e) => {
        if (e.target.value === "A-z" || e.target.value === 'Z-a') {
            dispatch(orderByRecipe(e.target.value))
            setOrder(e.target.value)
            setCurrentPage(1)
        } else {
            dispatch(orderByHealth(e.target.value))
            setOrder(e.target.value)
            setCurrentPage(1)
        }
    }

    const handleChangeDiets = (e) => {
        dispatch(filterByDiets(e.target.value));
        setCurrentPage(1);
    }

    function handlerFilteredCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value)); //recordar esto es el payload lo del select
        
      }


    return (
        <div className="toolbar">
            <div className="orderContainer">
                <span>Order By:</span>
                <select onChange={(e) => handleChange(e)} defaultValue="Order By:" className="selectMain">
                    <option value="default" disabled>Order By:</option>
                    <option value="A-z">A-z</option>
                    <option value="Z-a">Z-a</option>
                    <option value="L-H">Lower</option>
                    <option value="H-L">Higher</option>
                    
                </select>
            </div>
            <div>
                <select onChange={(e)=>handlerFilteredCreated(e)}>
                    <option>Filter By Origin:</option>
                    <option value="API">API</option>
                    <option value="all">Alls</option>
                    <option value="db">User Created</option>
                 </select>

            </div>

            <div>
                <button onClick={() => window.location.reload()} className="reset">
                <svg class="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff342b" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                   <span className="lable">Reload</span> 
                </button>
            </div>
            <div className="filterContainer">
                <span>Filter Diets:</span>
                <select onChange={(e) => handleChangeDiets(e)} className="selectMain">
                    <option value="allDiets">All Diets</option>
                    {diestByName?.map((el) => {
                        return (
                            <option value={el} key={el}>{el}</option>
                        )

                    })}
                </select>
            </div>
        </div>
    )
}
