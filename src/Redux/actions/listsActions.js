
// recupération des constantes
import { CONSTANTS } from '../actions';

// constate permettant de retourner un objet avec le titre (dans listReducer) de la liste
export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

// pour le DnD, permet de trier les listes/cartes pendnat le DnD
export const sort = (
    droppableIdStart, 
    droppableIdEnd, 
    droppableIndexStart, 
    droppableIndexEnd, 
    draggableId
    ) => {
            return {
                type: CONSTANTS.DRAG_HAPPENED,
                payload: {
                    droppableIdStart, 
                    droppableIdEnd, 
                    droppableIndexStart, 
                    droppableIndexEnd, 
                    draggableId,
                }
            }
        }
