import React from "react"
import './ActivityView.css'
import ConfigView from "./ConfigView"
import ParserView from "./ParserView"
import SearchView from "./SearchView"

function ActivityView(props) {
    if (!props.activity) {
        props.activity = "config"
    }

    const Component = {
        'config': ConfigView,
        'parser': ParserView,
        'search': SearchView,
    }[props.activity]

    return (
        <div className="activity-container">
            <Component />
        </div>
    )
}


export default ActivityView