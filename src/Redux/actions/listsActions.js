
// recupération des constantes
import { CONSTANTS } from '../actions';

// constate permettant de retourner un objet avec le titre (dans listReducer) de la liste
export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};