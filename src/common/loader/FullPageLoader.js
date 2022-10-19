import React, {useState} from "react";

import LoaderImage from "./LoaderImage";

const FullPageLoader = () => {
    const [isLoading, setIsLoading] = useState(false);

    return [
        isLoading ? <LoaderImage /> : '',

        // show Loader
        () => setIsLoading(true),

        // hide loader
        () => setIsLoading(false),
    ]
}
export default FullPageLoader;