import React from "react";

class PanelAdd extends React.Component{

    constructor(props){
        super(props);
    
        this.state ={
            titulo: '',
            imagen: '',
            edad: 8
            };

        }
    
        onChangeTitulo = (e) => {
            this.setState({titulo: e.target.value});
            
        }
        onChangeImagen = (e) => {
            this.setState({imagen: e.target.value});
        }
        onChangeEdad = (e) => {
            const edad = parseInt(e.target.value);
            this.setState({edad: edad});
        }
        onSubmit = (e) => {
            e.preventDefault();
            const titulo = this.state.titulo;
            const imagen = this.state.imagen;
            const edad = this.state.edad;

            this.props.onadd({titulo: titulo, imagen: imagen, edad: edad});
            this.props.onCancel();
        }
    

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                        <label>Nombre pelicula:</label><br />
                        <input onChange={this.onChangeTitulo} type="text" name="tittle" className="input"  />
                        </p>

                        <p>
                        <label>Imagen</label><br />
                        <input onChange={this.onChangeImagen} type="text" name="image" className="input"  />
                        </p>

                        <p>
                        <label>Calificación por edad:</label><br />
                        <select onChange={this.onChangeEdad}>
                                <option value="8">8 Años</option>
                                <option value="12">12 Años</option>
                                <option value="15">15 Años</option>
                                <option value="18">18 Años</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar Pelicula" />
                        <button onClick={this.props.onCancel} className="button btn-normal" >Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;