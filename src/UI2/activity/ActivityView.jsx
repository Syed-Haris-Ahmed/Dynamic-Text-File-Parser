import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ActivityView.css'
import ConfigView from './ConfigView'
import ParserView from './ParserView'
import SearchView from './SearchView'
import SettingsView from './SettingsView'

function ActivityView({ activity }) {
    if (!activity) {
        activity = 'config'
    }

    const Component = {
        config: ConfigView,
        parser: ParserView,
        search: SearchView,
        settings: SettingsView,
    }[activity]

    return (
        <TransitionGroup className="activity-container">
            <CSSTransition key={activity} timeout={300} classNames="fade">
                <div className="activity-content">
                    <Component />
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default ActivityView
