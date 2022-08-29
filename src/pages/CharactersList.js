import React from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { Link } from 'react-router-dom'

const CharactersList = () => {
    const { error, loading, data } = useCharacters()

    if (loading) return <div>Loading ...</div>

    if (error) return <div>Something went wrong</div>

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>A simple app to demonstrate fetching data using Rick & Morty GraphQL</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>
                    <Link to='/search' style={{ fontSize: '25px', textDecoration: 'none' }}>Search character location</Link>
                </button>
            </div>
            <div className='CharacterList'>
                {data.characters.results.map(character => (
                    <Link className='character-photo' to={character.id}>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CharactersList