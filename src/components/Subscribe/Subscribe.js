import React from 'react';

const Subscribe = () => {
    return (
        <div >
            <h2 className="about align-center">Need Update? Subscribe Here</h2>
            <h4>Name:</h4><input type="text" name="Name" id="" /> <br />
            <br />
            <h4>Email:</h4>
            <input type="email" name="Email" id="" /> <br />
            <br />
            <input className="btn-success rounded" type="submit" value="Submit" />
        </div>
    );
};

export default Subscribe;