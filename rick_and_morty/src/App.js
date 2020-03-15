import React from 'react';
import './App.css';
import api from './lib/api';

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      modalActivo : false,
      personajes: [],
      pid: 1,
    }
  }

  switchModal = (id) => {
    api.getSingleCharacter(id)
    .then(results => {
      this.setState({
        personaje: results,
      })
    })
    
    this.setState({
      modalActivo : !this.state.modalActivo,
      pid : id,
    })
  }

  componentDidMount = () => {
    api.getAllCharacters()
      .then(results =>{
       this.setState({
        personajes : results
       }) 
      })
      .catch(e => console.error(e))
  }

  renderCards(p) {
    return(
      
              <div className='Card' key={p.id} onClick = {personaje => this.switchModal(p.id)}>
              <div className = 'Card-Imagen'>
                <figure>
                  <img src = {p.image} alt={p.name}/>
                </figure>
              </div>        
              <div className = 'Card-description'>
                <div className = 'Card-name'>
                  <h1>{p.name}</h1>
                </div>
              </div>
            </div>
      );
    }

  render(){
    const {modalActivo, personajes} = this.state
    console.log(modalActivo);
    const cards = personajes.map(p => this.renderCards(p))
    return (
    /**
     *
     * Here we will need to define what our application will return with jsx
     *
     **/
      <div className='App'>
        <div className='App-contenedor'>
          <h1>Rick and Morty</h1>
          <div className='Cards-contenedor'>
            {cards}
                      { this.state.modalActivo ? (
            <div className='Modal' onClick={e => this.switchModal(this.state.pid)}>
              <div className='Card-detalle'>
                <div className='Card-imagen'>
                  <figure>
                    <img alt='test' src={'https://rickandmortyapi.com/api/character/avatar/167.jpeg'} />
                  </figure>
                </div>
                <div className='Card-detalle-descripcion'>
                  <div className='descripcion'>
                    <h3>name</h3>
                    <div className='caracteristica'>
                      <p>Status</p>
                      <p className='caracteristica-valor'>
                        status
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Especie</p>
                      <p className='caracteristica-valor'>
                        species
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Genero</p>
                      <p className='caracteristica-valor'>
                        ??
                      </p>
                    </div>
                    <div className='caracteristica'>
                      <p>Origen</p>
                      <p className='caracteristica-valor'>
                        Tierra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null }
      </div>
        </div>
      </div>

  );
  }
}

export default App;
