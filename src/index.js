import React from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'


let bookList =[
    {"title" : "title1", "author": "author1", "pages": "500"},
    {"title" : "title2", "author": "author2", "pages": "500"},
    {"title" : "title3", "author": "author3", "pages": "500"}
]



ReactDOM.render(
    <Library books={bookList}/>,
    document.getElementById('root')
)