import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddTrip({ postNewTrip, errorMessages }) {

    const [ newTrip, setNewTrip ] = useState({
        name: "",
        location: "",
        description: "",
        start_date: "",
        end_date: "",
        image: "",
        budget: 0
    })

    const history = useHistory()

    function handleInput(event) {
        setNewTrip({
            ...newTrip,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        postNewTrip(newTrip);
        history.push("/tripsbooked")
    }

    return (
        <div class="container-fluid" style={{margin: "auto"}}>
            <form onSubmit={handleSubmit} style={{margin: "auto"}}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name of Trip
                        <input type="text" className="form-control" name="name" value={newTrip.name} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Location
                        <input type="text" className="form-control" name="location" value={newTrip.location} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Description
                        <input type="text" className="form-control" name="description" value={newTrip.description} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Start Date
                        <input type="date" className="form-control" name="start_date" value={newTrip.start_date} onChange={handleInput}/>
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">End Date
                        <input type="date" className="form-control" name="end_date" value={newTrip.end_date} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Image
                        <input type="text" className="form-control" name="image" value={newTrip.image} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Budget
                        <input type="text" className="form-control" name="budget" value={newTrip.budget} onChange={handleInput} />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            { errorMessages.length > 0 ? errorMessages.map(error => <p>{error}</p>) : null }
        </div>
    )
}

export default AddTrip;