import React from "react";

const Clients = () => {
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <button type="button"
                    className="btn btn-success btn-lg "
                    style={{margin: "10px 0"}}>
                Add client
            </button>
            <div className="list-group">
                <button className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <div style={{width: "15rem"}}>
                            <img src="" className="rounded" alt="avatar"/>
                        </div>
                        <div className="d-block">
                            <h4 className="mb-1">First name Second name</h4>
                            <small>Phone number: +380507878787</small>
                            <p className="mt-3">About me: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis incidunt minus modi necessitatibus quisquam quo! Dolorum, eius, excepturi. Aspernatur, dignissimos ex quos ratione rem repellendus suscipit voluptate? Id, saepe? </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end m-2">
                        <button type="button" className="btn btn-outline-primary me-2">Update</button>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                    </div>
                </button>
                <button className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </button>
                <button className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </button>
            </div>
        </div>
    )
};

export default Clients
