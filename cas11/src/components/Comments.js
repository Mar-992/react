import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchCommentsRequest} from './../actions/CommentsActions'
import { Link } from 'react-router-dom'

export function Comments(){

    const comments = useSelector(state=> state.CommentsReducer.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[dispatch])

    return(
        <div id="comments">
            <table border="1">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Body
                        </th>
                        <th>
                           Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {comments.length > 0 && comments.map((comment)=>{
                        return(
                            <tr key={comment.id}>
                                <td>
                                    {comment.name}
                                </td>
                                <td>
                                    {comment.email}
                                </td>
                                <td>
                                    {comment.body}
                                </td>
                                <td>
                                    <Link to={`/comment/${comment.id}`}>View details</Link>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )

}