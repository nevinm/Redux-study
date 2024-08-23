import './App.css';
import 'h8k-components';

import React, { useState, useCallback } from 'react';
import { Like } from './Like';
const title = "React App";

/*
You're building a React application that displays a list of items. Each item has a title and a button that, when clicked, increments a counter specific to that item. Implement the ItemList component with the following requirements:
* 		Display a list of items, each containing a title and a button labeled "Like".
* 		When the "Like" button associated with an item is clicked, increment a counter specific to that item.
* 		Ensure that the counter state for each item is memoized to prevent unnecessary re-renders of the ItemList component.
* 		Use useCallback to memoize the event handler for the "Like" button click.
Your solution should use React functional components, state management hooks, and the memo hook to optimize performance.


*/

// Nevin - LIKE (1)
// Sagar - LIKE (2)
const likeCount = [
    {
        id: 1,
        name: "Nevin",
        count: 1,
    }, {
        id: 2,
        name: "Sagar",
        count: 3,
    }, {
        id: 3,
        name: "John",
        count: 2,
    }, {
        id: 4,
        name: "Lily",
        count: 5,
    },
]

const App = () => {
    const [count, setCount] = useState(likeCount)

    const handleLike = useCallback((id) => {
        setCount(prevState => {
            const updatedState =  prevState.map(currentUser => {
                return currentUser.id === id ? { ...currentUser, count: currentUser.count + 1 } : currentUser
            })
            return updatedState
        })
    }, [])

    
    return (
        <div className="like-list">
            {count.map((currentUser, index) => {
                const { name, count, id } = currentUser
                
                return (
                  <Like name={name} count={count} id={id}  onClick={handleLike}/>
                )
            })}


        </div>
    );
}

export default App;
import React, { useMemo } from "react"

export const Like = React.memo(({ onClick, id, name, count }) => {
  return (
    <>
      <div className='user' key={id}>
        <span>{name}</span>
        <button onClick={() => onClick(id)}>{count}</button>
      </div>
    </>
  )
})