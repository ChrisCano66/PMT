// REACT
import React, {Component} from 'react';

// REDUX
import { connect } from 'react-redux';

// COMPONENT
import PmtList from './PmtList'


// Class principal de l'application
class App extends Component {

  render() {
    // constante récupérant la liste qui a été transformer en props pour les passer aux props
    const {lists} = this.props
    return (
      <div>
        <h2>Hello</h2>
        <div style={styles.container}>
          {/** on affiche l'ensemble des listes principales en les "mappant" à partir de la liste passer en props */}
          { lists.map(list => <PmtList title= {list.title} cards={list.cards}/>)}
        </div>
      </div>
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
