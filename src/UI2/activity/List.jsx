import React from 'react'
import data from './ListData.json'
import './ActivityView.css'

function List(props) {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className='search-result-container'>
            {filteredData.map((item, index) => (
                <div
                    className={`search-result ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={item.id}
                >
                    {item.text}
                </div>
            ))}
        </div>
    )
}

export default List
