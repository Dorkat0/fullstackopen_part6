import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import anecdoteReducer from './reducers/anecdoteReducer'
import { createAnecdote, newVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes = {anecdotes}/>
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App