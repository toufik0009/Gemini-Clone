import { createContext, useState } from "react";
import runChat from "../config/GeminiApi";

export const Context = createContext()

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
    }


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)

        let responseA;
        
        if (prompt != undefined) {
            responseA =await runChat(prompt)
            setRecentPrompt(prompt)
        }else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            responseA=await runChat(input)
        }

        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response = await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }
    
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider