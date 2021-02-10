import React from 'react';
import PropTypes from 'prop-types';

export function Movies(props){
    
    console.log(props);
    return(
        <div id="movies">
            <table border="1">
                <thead>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            Release Date:
                        </td>
                        <td>
                            Plot:
                        </td>
                        <td>
                            Genre:
                        </td>
                        <td>
                            Imdb Link:
                        </td>
                        <td>
                            Imdb Url:
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.filmovi.map((film,i)=>{
                        return(
                            <tr key={i}>
                                <th>
                                    {film.name}
                                </th>
                                <th>
                                    {film.releaseDate}
                                </th>
                                <th>
                                    {film.plot}
                                </th>
                                <th>
                                    {film.genre}
                                </th>
                                <th>
                                    {film.imdbLink}
                                </th>
                                <th>
                                    {film.imdbUrl}
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

Movies.propTypes = {
    filmovi: PropTypes.array.isRequired
}