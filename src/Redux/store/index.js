//////  UTILISATION DE REDUX  //////
// redux permet de gérer l'ensemble des constantes états de l'application 
// il vient en complément de React et sera surtout utiliser pour gérer les hooks   
// selon les actions de l'utilisateur, celles-ci vont modifier l'état de redux
// cela passe ensuite par un "reduicer" qui va créer un nouvel état qui permettra de déclencher un nouveau rendu

// REDUX 
import { createStore } from 'redux';
import rootReducer from '../reducers'


// objet Redux qui possède et gère les différents "states" de l'application. 
// stocke les nouvelles arrivées du Reducer veant du Reducer à la racine
const store = createStore (rootReducer)


export default store;