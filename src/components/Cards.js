import React from "react"


export const EmpCard = (props) => {
    return (
        <div className="col-4-lg col-6-small card m-2" style={{ width: "18rem" }}>
            <div className="card-header">
                <i className="far fa-clipboard"></i>
            <span style={{marginLeft: 10}}>{props.firstname} {props.lastname}</span>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.department}</h6>
                <p className="card-text">{props.email}</p>
                <p className="card-text">{props.phone}</p>
            </div>
        </div>
    )
}