// Liste de l'ensemble des Reducers de l'application 

// Actions
import { CONSTANTS } from "../actions"

let listID = 3;
let cardID = 8;

// contante sous forme d'array permettant l'initialisation de l'état
const initilaState = [
    {
        // titre de la liste principale / puis son id / puis la liste des items (cards) de la liste principale
        title: "First List", 
        id: `list-${0}`, 
        cards: [
            {
                id: `card-${0}`,
                text: "Static list",
            },
            {
                id: `card-${1}`,
                text: "Static list 2",
            },
        ]
    },
    {
        title: "Second List", 
        id: `list-${1}`, 
        cards: [
            {
                id: `card-${2}`,
                text: "Static list 3",
            },
            {
                id: `card-${3}`,
                text: "Static list 4",
            },
            {
                id: `card-${4}`,
                text: "Static list 5",
            },
        ]
    },
    {
        title: "Third List", 
        id: `list-${2}`, 
        cards: [
            {
                id: `card-${5}`,
                text: "Static list 6",
            },
            {
                id: `card-${6}`,
                text: "Static list 7",
            },
            {
                id: `card-${7}`,
                text: "Static list 8",
            },
        ]
    },
];

// constante qui récupère le state et l'action
// le state est initialisé par défaut avec la constante d'initilaisation "initialState"
const listsReducer = (state = initilaState, action) => {
    // on crée un switch/case qui dépendra du type d'action
    // par défaut, retournera le state.
    switch(action.type) {
        
        // cas d'ajout d'une liste
        case CONSTANTS.ADD_LIST: {
            // on crée une nouvelle liste
            const newList = {
                id: `list-${listID}`,
                title: action.payload,
                cards: [],
            };
            // on incrément l'ID pour la prochaine fois
            listID += 1;
            // on retourne une array qui contient les listes déjà créées dans le state + la nouvelle
            return [...state, newList];
        }

        // cas d'ajout d'une carte
        case CONSTANTS.ADD_CARD: {
            // on crée une nouvelle carte
            const newCard = {
                id: `card-${cardID}`,
                text: action.payload.text,
            };
            // on incrément l'ID pour la prochaine fois
            cardID += 1;
            // on retourne une array qui contient les cartes déjà créées dans le state + la nouvelle
            const newState = state.map(list => {
                // vérifie s'il y a des cartes déjà présentes dans la liste 
                // si oui, on retourne ces carte + la nouvelle, si non juste la liste
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });
            // on retourne le nouvel état
            return newState;
        }
        
        // cas du DnD
        case CONSTANTS.DRAG_HAPPENED: {
            // on récupère les ocnstantes d'actions de sort()
            const {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd, 
                draggableId
            } = action.payload;

            // on fait une copie du newState au cas où avant de l'utiliser
            const newState = [...state];

            // On vérifie que le droppableIdStart est le même que le droppableIdEnd ==> 
            // nous permmet ainsi de savoir que l'on est dans le même contenaire pour le DnD
            // sinon c'est que c'est dans des container différents
            if (droppableIdStart === droppableIdEnd) {
                // on crée une nouvelle liste qui récupère toute les listes où l'on peut faire le DnD
                const list = state.find(list => droppableIdStart === list.id);
                // on crée de nouvelles cartes (celle modifiées) en switchant les ids 
                // on commence par enlever
                const card = list.cards.splice(droppableIndexStart, 1);
                // et on insert 
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            // on retourne le nouvel état
            return newState;
        }

        // cas par défaut
        default:
            return state;
    }
}

export default listsReducer;