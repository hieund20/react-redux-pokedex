import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetPokemonList } from "../actions/pokemonActions";

const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    useEffect(() => {
        fetchData(1)
    }, [])

    const fetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className='list-wrapper'>
                    {
                        pokemonList.data.map(el => {
                            return (
                                <div className='pokemon-item'>
                                    <p>{el.name}</p>
                                    <Link to={`/pokemon/${el.name}`}>View</Link>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

        if (pokemonList.loading) {
            return <p>Loading...</p>
        }

        if (pokemonList.errorMsg !== '') {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>Unable to get data</p>
    }

    return (
        <div>
            {showData()}
        </div>
    )
}

export default PokemonList