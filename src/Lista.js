import React from "react";
import Item from "./Item";

function Lista(props){
    return (
        <div className="list">
            {
                props.items.map(item =>
                        <Item  
                        key= {item.id}
                        id= {item.id}
                        titulo= {item.titulo}
                        imagen={item.imagen}
                        edad={item.edad}

                        onremove = {props.onremove}
                        />
                    )
            }
        </div>
    );
}

export default Lista;