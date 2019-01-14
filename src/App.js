import React, { Component } from "react";
import chocolates from "./chocolates.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import InfoBar from "./components/InfoBar";
import Chocolates from "./components/Chocolates";



class App extends Component {
  // Setting this.state.chocolates to the chocolates json array
  state = {
    chocolates,
    clicked : [],
    score: 0
  };

  removeChocolates = id => {
    // Filter this.state.chocolates for chocolates with an id not equal to the id being removed
    
    if(!this.state.clicked.includes(id)){
      const newArr = this.shuffle(this.state.chocolates);
      this.setState({
        clicked: [...this.state.clicked, id],
        score: this.state.score + 1,
        chocolates : newArr
      }, function(){
        console.log(this.state.clicked)
      })
    }else{
      alert('You lose')
    }
   // const chocolates = this.state.chocolates.filter(chocolate => chocolate.id !== id);
    // Set this.state.chocolates equal to the new chocolates array
   
  };
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  // Map over this.state.chocolates and render a Chocolates component for each chocolate object
  render() {
    return (
      <div>
        <Header/>
        <InfoBar score={this.state.score}/>
      <Wrapper>
        {this.state.chocolates.map(chocolate => (
          <Chocolates
            removeChocolates={this.removeChocolates}
            id={chocolate.id}
            key={chocolate.id}
            image={chocolate.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
