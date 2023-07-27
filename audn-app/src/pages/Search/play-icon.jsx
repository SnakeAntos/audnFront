import React from "react"

export const PlayIcon = (props) => {
    return(
            <>
            <svg width="48" height="48" viewBox="0 0 48 48" fill={props.fill} xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} id="search-top-item-play-icon">
            <path d="M48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24ZM21.557 15.279C21.3327 15.1193 21.0688 15.0244 20.7941 15.0048C20.5195 14.9851 20.2448 15.0414 20 15.1675C19.7552 15.2936 19.5499 15.4846 19.4065 15.7197C19.2631 15.9547 19.1871 16.2247 19.187 16.5V31.5C19.1871 31.7753 19.2631 32.0453 19.4065 32.2803C19.5499 32.5154 19.7552 32.7064 20 32.8325C20.2448 32.9586 20.5195 33.0149 20.7941 32.9952C21.0688 32.9756 21.3327 32.8807 21.557 32.721L32.057 25.221C32.2514 25.0822 32.4099 24.8991 32.5193 24.6867C32.6286 24.4743 32.6857 24.2389 32.6857 24C32.6857 23.7611 32.6286 23.5257 32.5193 23.3133C32.4099 23.1009 32.2514 22.9178 32.057 22.779L21.557 15.279Z"/>
            </svg>
            </>
    )
}