import React, { useState } from "react"
import { employees, departments } from "../data/employees.js"
import { EmpCard } from "./EmpCard.js"

export const SearchResults = () => {

    const sortedEmp = employees.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1)

    const [ results, setResults ] = useState({
            employees: sortedEmp
    })

    const handleReset = () => {
        setResults({employees: sortedEmp})
    }

    const handleSubmit = ((event) => {
        event.preventDefault()
        let name = document.getElementById("name-field").value
        let department = document.getElementById("department-field").value

        document.getElementById("search-form").reset()

        if (department && name) {
            setResults({employees: employees.filter((employee) => (`${employee.firstname} ${employee.lastname}`).includes(name) && employee.department === department)})
        } else if (department) {
            setResults({employees: employees.filter((employee) => employee.department === department)})
        } else if (name) {
            setResults({employees: employees.filter((employee) => (`${employee.firstname} ${employee.lastname}`).includes(name))})
        }
    })

    return (
        <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-6">
                    <form id="search-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Search by Name</label>
                            <input name="name" type="text" className="form-control" id="name-field" aria-describedby="emailHelp" />
                            <div className="row" style={{ justifyContent: "center" }}><p>-OR-</p></div>
                            <div className="form-row align-items-center">
                                <div className="col-auto my-1">
                                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Search by Department</label>
                                    <select name="department" className="custom-select mr-sm-2" id="department-field">
                                        <option value="" defaultValue>Choose...</option>
                                        {departments.map((department) => <option key={department} value={department}>{department}</option>)}
                                    </select>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button onClick={handleReset} type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
                {results.employees !== [] ? results.employees.map(result => (<EmpCard
                    key={result.id}
                    firstname={result.firstname}
                    lastname={result.lastname}
                    department={result.department}
                    email={result.email}
                    phone={result.phone}
                />
                )) : <h3>No search results available.</h3>}
            </div>
        </div>
    )
}