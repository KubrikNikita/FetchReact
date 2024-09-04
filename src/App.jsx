import './App.css'
import {GlobalStyle} from "./globalStyles.js";
import {Recipes} from "./components/Recipes/index.ts";


export function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Recipes/>

        </div>
    )
}


