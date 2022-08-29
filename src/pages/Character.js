import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { Link, useParams } from 'react-router-dom'

const Character = () => {
    const { id } = useParams()
    const { data, loading, error } = useCharacter(id)

    if (loading) return <div>Loading ...</div>

    if (error) return <div>Something went wrong</div>

    return (
        <div>
            <button style={{ marginBottom: '50px' }}>
                <Link className='goback' to='/'>Go back</Link>
            </button>
            <div className='character'>
                <img src={data.character.image} width={750} height={750} />
                <div className='character-content'>
                    <h1>{data.character.name}</h1>
                    <p>{data.character.gender}</p>
                    <h3>Episodes:</h3>
                    <div className='character-episode'>
                        {data.character.episode.map(episode => (
                            <div>
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character