import React from 'react'

const mylistdetail = ({filteredMovies, userstatus, showmore}) => {
  return (
    <ul className="flex flex-col">
          {filteredMovies.map((movie) => (
            <>
            <li className="flex flex-row align-middle justify-between my-2 bg-gray-200 border rounded-md" key={movie.ID}>
              <h1 className="flex ml-2 text-4xl items-center">{movie.post_title}</h1>
              <p className="my-8 mr-4 text-lg flex items-center">
                {userstatus === 'loading' ? '' : (
                  <>
                  <button className="flex px-4 py-1 rounded-md bg-gray-100 mx-2" onClick={() => handleRemove(movie.ID, users.name)}>
                    Remove
                  </button>
                  <button className="flex px-4 py-1 rounded-md bg-gray-100 mx-2"onClick={() => handleshowmore()}>
                  {!showmore ? 'Show detail': "Hide details"}
                </button>
                </>
                )}
              </p>
            </li>
            {showmore && (
              <p className="my-2 text-xl">{movie.post_content}</p>
              )}
            </>
          ))}
        </ul>
  )
}

export default mylistdetail