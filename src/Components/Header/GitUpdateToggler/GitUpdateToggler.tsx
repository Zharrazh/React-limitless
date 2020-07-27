import "./GitUpdateToggler.scss"
import React, { useState } from "react"
import { GitUpdatesWindow } from "./GitUpdatesWindow/GitUpdatesWindow"

export const GitUpdateToggler = () => {
    let [isHide, setHide] = useState(true)
    const onClickBtn = () =>{
        setHide(!isHide)
    }
    return (
        <div className="gitUpdateToggler" onClick={onClickBtn}>
            <i className="fas fa-code-branch fa-lg"></i>
            {!isHide && <div className="gitUpdatesWrapper">
                <GitUpdatesWindow/>
            </div>  }
        </div>
    )
}