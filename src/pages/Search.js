import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`

const Search = () => {
    const [name, setName] = useState('')

    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name: name
        }
    })

    if (error) console.log(error);

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <button>
                <Link className='goback' to='/'>Go back</Link>
            </button>
            <form onSubmit={handleSubmit}>
                <h1>Search for a character's location</h1>
                <h3>Try "Rick Sanchez" or "Annie" or "Beth Smith", etc.</h3>
                <input value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => getLocations()}>Search</button>
                <button onClick={() => setName('')}>Clear</button>


                {loading && <div>Loading ...</div>}
                {error && <div>Something went wrong</div>}

                {data && (
                    <ul>
                        {data.characters.results.map(character => (
                            <li>{character.location.name}</li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    )
}

export default Search