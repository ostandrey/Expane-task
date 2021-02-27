import React from "react";

const Client = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="mb-3">
                        <label className="form-label">First name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Bob"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Surname</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Bobson"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="text"
                               className="form-control"
                               placeholder="+380501111111"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Your photo</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea" className="form-label">About yourself</label>
                        <textarea className="form-control" id="exampleFormControlTextarea"/>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Client;
