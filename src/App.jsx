import './App.css'
import {GlobalStyle} from "./globalStyles.js";
import {Recipes} from "./components/Recipes/index.js";


export function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Recipes/>

        </div>
    )
}


