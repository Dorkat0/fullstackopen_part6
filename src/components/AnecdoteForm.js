import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.text.value
        event.target.text.value = ''
        dispatch(createAnecdote(content))
    }

    return (
    <form onSubmit = {addAnecdotes}>
        <div><input name="text"/></div>
        <button type="submit">create</button>
      </form>
    )
}

export default AnecdoteForm