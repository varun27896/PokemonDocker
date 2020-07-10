import React, { Component } from 'react';
import Pokedex from './Pokedex.js'

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        let h1 = []
        let h2 = [ ...this.props.pokemon ];
        while(h1.length < h2.length){
            let randIdx = Math.floor(Math.random() * h2.length);
            let randomP = h2.splice(randIdx,1)[0];
            h1.push(randomP);
        }
        let exp1 = h1.reduce((exp,pokemon) => exp + pokemon.base_experience,0);
        let exp2 = h2.reduce((exp,pokemon) => exp + pokemon.base_experience,0);
        return (
            <div>
                <Pokedex pokemon={h1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={h2} exp={exp2} isWinner={exp1<exp2}/>
            </div>
        );
    }
}

export default Pokegame;