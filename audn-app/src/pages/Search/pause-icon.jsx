import React from "react"

export const PauseIcon = (props) => {
    return(
            <svg width="48" height="48" viewBox="0 0 48 48" fill={props.fill} xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} id="search-top-item-play-icon">
            <path d="M24 48C37.2562 48 48 37.2562 48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 37.2562 10.7438 48 24 48ZM21 18V30C21 31.6594 19.6594 33 18 33C16.3406 33 15 31.6594 15 30V18C15 16.3406 16.3406 15 18 15C19.6594 15 21 16.3406 21 18ZM33 18V30C33 31.6594 31.6594 33 30 33C28.3406 33 27 31.6594 27 30V18C27 16.3406 28.3406 15 30 15C31.6594 15 33 16.3406 33 18Z"/>
            </svg>
    )
}