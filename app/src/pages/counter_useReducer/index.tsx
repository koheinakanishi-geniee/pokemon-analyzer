import React, {useReducer, useEffect} from "react";
import {NextPage} from "next";

type State = {
    count: number;
};

type Action = {
    type: "increment" | "decrement";
};

const reducer = (state: State, action: Action): State => {
    if (action.type === "increment") {
        return {
            count: state.count + 1
        };
    } else {
        return {
            count: state.count - 1
        }
    }
};

const Page: NextPage = () => {
    const [currentState, dispatch] = useReducer(reducer, { count: 0 });
    useEffect(()=>{
         const c:string = currentState.count.toString()
         console.log(c+"回実行されました")
    })
    return <div>
        <p> {currentState.count}です </p>
        <button onClick={() => {dispatch({ type: "increment" })}} > + </button>
        <button onClick={() => {dispatch({ type: "decrement" })}} > - </button>
    </div>
}

export default Page
