import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const h1 = React.createElement("h1",{class : "color-head"}, "Titan,Fastrack, Tanishq");
console.log("laxmi", h1);
                // OR
const h2= <h1>Laxmi</h1>;
console.log(h2);
// Console.log will be object
// --------------------------------------------------------------------------------------------

// Nesting of Elements
const div = (<div>
    <p>Laxmi</p>
    <p>Waghmore</p>
</div>)  
                        // OR

const div1 = React.createElement("div",{},[
    (React.createElement("p",{},("Ram"))),
    (React.createElement("div",{},("Sita")))])
console.log(div1);


// Functional Component
const HeadComponent = () => <div>lax</div>
       
    //    OR
const name1 = "Laxmi"   
const Greetings = () => <h1>Hi Everyone</h1>

const HeadComponent1 = () =>  {
    return (
        <div>
            <div>hi</div>
            <div>{name1} Waghmore</div>
            <Greetings/>
        </div>
        
    )
}      
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
