import { useState } from "react";

const MyAssignFunctionalComponent = () => {
    const [link, setLink] = useState("www.google.com");

    return(
        <div>
            <p>Website : 
            <a href= {link} onFocusCapture={() => setLink("https://react.dev/")}>{link}</a>
            </p>
        </div>
    )
}

export default MyAssignFunctionalComponent;