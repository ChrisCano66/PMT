// Fichier de base des Reducers de REDUX 
// permet de manager les différentes actions appelelr par l'utilisateur et de pouvoir les lancer simultanement
// permet d'avoir des fonctions de reducer plus simple pour ensuite les passer au store

// REDUX
import { combineReducers } from 'redux';
import listsReducer from './listsReducer';

// récupère les différentes listes pour ensuite les afficher dans l'application
export default combineReducers({
    myLists: listsReducer,
});