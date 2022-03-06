import React from "react";
import './Item.css'

class Item extends React.Component{

    constructor(props){
        super(props);
    }
    onRemove = (e) =>{
        this.props.onremove(this.props.id);
    }

    render(){
    return(
        <div className="item">
            <div className="imagen"><img src={this.props.imagen} width="100%" /></div>
            <div className="titulo">{this.props.titulo}</div>
            <div className="edad">
            <p>
            
            </p>
            Clasificacion por edad:
            <select value={this.props.edad}>
                <option value="8">8 Años</option>
                <option value="12">12 Años</option>
                <option value="15">15 Años</option>
                <option value="18">18 Años</option>
            </select>
            </div>
            <div className="actions">
                <button onClick={this.onRemove}>Eliminar</button>
            </div>
        </div>
    );
}
}

export default Item;