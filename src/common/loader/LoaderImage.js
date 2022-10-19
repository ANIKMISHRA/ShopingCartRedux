import React from "react";

const LoaderImage = () => {
    return (
        <div className="loader-container">
            <img src={process.env.PUBLIC_URL + `/spinner.gif`} className="loader-img" alt="loading" />
        </div>
    )
}
export default LoaderImage;