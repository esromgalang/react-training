import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {

    const ids = [
        {id:'1',name:'Post 1'},
        {id:'2',name:'Post 2'},
        {id:'3',name:'Post 3'}
    ]

    // const list = ids.map(item => {
    //     return (
    //         <span key={item.id}>
    //             <Link to={'/posts/' + item.id}>{item.name}</Link><br />
    //         </span>
    //     )
    // })

    
    return ids.map(item => {
        return (
            //Whenever we are returning a list of things we always need to add key to each element
            <span key={item.id}>
                <Link to={`/posts/${item.id}`}>{item.name}</Link><br />
            </span>
        )
    })
}

export default Posts;