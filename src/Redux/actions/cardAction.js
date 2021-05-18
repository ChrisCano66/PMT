
// recupération des constantes
import { CONSTANTS } from '../actions';

// constate permettant de retourner un objet avec le text (dans listReducer) de la liste
export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID },
    };
};