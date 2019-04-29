import React, {Component} from 'react';
import './index.css'
import DisplayQuote from '../DisplayQuote/index'

class GenerateQuote extends Component {
    constructor(props){
        super(props)
        this.state = {item :
                    {
                       "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
                       "character": "Nelson Muntz",
                       "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
                       "characterDirection" : "Left"
                    }
                }       
    }

    getQuote = ()=> {
        // Récupération de l'employé via fetch
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => response.json())
            .then(data => {
                // Une fois les données récupérées, on va mettre à jour le state avec les nouvelles données
                this.setState({
                    item: data[0],
                });
            });
    }
    render(){
        return(
            <div className="GenerateQuote">
                <button onClick={this.getQuote}>Get quote</button>
                <DisplayQuote item={this.state.item } />
            </div>
        )
    }

}
export default GenerateQuote;