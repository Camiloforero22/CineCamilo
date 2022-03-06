import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Lista from './Lista';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      peliculas:[
        {id:0, edad: 8, titulo: "Sing 2", imagen:'Sing2.jpg'},
        {id:1, edad: 15, titulo: "Spiderman", imagen: "Spiderman.jpg"},
        {id:2, edad: 18, titulo: "Saw", imagen: "Saw.jpg"}

      ],
      copyPeliculas: []
    };
  }

  initPeliculas = () => {
    this.setState((state,props) => ({
      copyPeliculas: [...state.peliculas]
    }));
  }

  componentDidMount(){
    this.initPeliculas();
  }
  onadd = (item) =>{
    console.log(item);
    let temp = [...this.state.peliculas];
    const id = temp[temp.length-1].id ++;
    item["id"]= id;
    temp.push(item);

    this.setState({peliculas: [...temp]});
    this.initPeliculas();

  }

  onSearch = (query) =>{
    if(query== " "){
      this.initPeliculas();
    }else{
      const temp = [...this.state.peliculas];
      let res = [];

      temp.forEach(item =>{
        if(item.titulo.toLowerCase().indexOf(query) >- 1){
          res.push(item);
        }
        this.setState({copyPeliculas: [...res]});
      });
    }    
  }

  onRemove = (id) =>{
    var temp = [...this.state.peliculas];
    const res = temp.filter(item => item.id != id);

    this.setState({peliculas: [...res]});
    this.initPeliculas();
  }
  render(){
  return (
    <div
    className ="app">
      <Menu titulo="Cinema" 
      onadd={this.onadd} 
      onsearch={this.onSearch}
      
      />
      <Lista className="list" 
      items={this.state.copyPeliculas}
      onremove ={this.onRemove}/>
    </div>
  );
  }
}

export default App;


 