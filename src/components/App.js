// REACT
import React, {Component} from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import { sort } from '../Redux/actions'
// REDUX
import { connect } from 'react-redux';
// COMPONENT
import PmtList from './PmtList';
import PmtActionButton from './PmtActionButton';


// Class principal de l'application
class App extends Component {

  // fonction de drag and drop pour les cartes des listes
  // la fonction va permetre de créer le "contexte" (zone) où l'on pourra créer des zones de DnD
  onDragEnd = (result) => {
    // récupère les infos de la carte qui est drag (draggableId), l'emplacement d'où elle est drag (source)
    // et l'emplacement où elle est drop (destination)
    const { destination, source, draggableId } = result;

    // on vérifie s'il n'y a pas de destination (plus précisément si on veut metttre la carte hors de la zone Droppable)
    // s'il n'y a pas de destination, on fait un simple return "vide"
    if (!destination) {
      return;
    };

    // s'il y a une destination, on récupère les droppableID, droppableIndex, etc avec sort()
    // que l'on assigne à la source, la destination et draggableId
    this.props.dispatch(
      sort(
        source.droppableId, 
        destination.droppableId, 
        source.Index, 
        destination.Index, 
        draggableId
      )
    );  
  };

  render() {
    // constante récupérant la liste qui a été transformer en props pour les passer aux props
    const {lists} = this.props
    return (
      <DragDropContext onDragEnd= {this.onDragEnd}>
        <div>
          <h2>Hello</h2>
          <div style={styles.container}>
            {/** on affiche l'ensemble des listes principales en les "mappant" (ne pas oublier la key unique) à partir de la liste passer en props */}
            { lists.map(list => 
              <PmtList 
                listID={list.id}
                key={list.id} 
                title= {list.title} 
                cards={list.cards}
              />
            )}
            {/** gestion des bouton d'action ajout et fermeture pour l'ajout d'une liste/carte */}
            <PmtActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
} 

// constante permetant de transformer les states de redux en props pour react 
// on récupère la liste du reducer (myList)
const mapStateToProps = state => ({
  lists: state.myLists
})

// style pour l'App
const styles = {
  container: {
      display: "flex",
      flexDirection: "row",
      marginRight: 8,
  }
}

// export l'App tout en la connectant (connect) à Redux
export default connect(mapStateToProps) (App);
