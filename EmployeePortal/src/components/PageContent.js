import { useEffect } from "react";

export const PageContent = (props) => {
    console.log("PageContent rendered");

    useEffect
    return (
        <div>
            <h2>Page Content</h2>
            <button onClick={() => props.onClick()}>Content Click</button>
        </div>
    )
}


// export const PageContent = () => {
//     <div><h2>Page Content</h2>
//         <p>If a component uses non-primitive value as a dependency in hooks like useEffect, useMemo, useCallback, it should be memoized.</p>
//     </div>
// }