// Liste de l'ensemble des Reducers de l'application 


// contante sous forme d'array permettant l'initialisation de l'état
const initilaState = [
    {
        // titre de la liste principale / puis son id / puis la liste des items (cards) de la liste principale
        title: "First List", 
        id: 0, 
        cards: [
            {
                id: 0,
                text: "Static list"
            },
            {
                id: 1,
                text: "Static list 2"
            },
        ]
    },
    {
        title: "Second List", 
        id: 1, 
        cards: [
            {
                id: 0,
                text: "Static list 3"
            },
            {
                id: 1,
                text: "Static list 4"
            },
            {
                id: 2,
                text: "Static list 5"
            },
        ]
    },
    {
        title: "Third List", 
        id: 2, 
        cards: [
            {
                id: 0,
                text: "Static list 6"
            },
            {
                id: 1,
                text: "Static list 7"
            },
            {
                id: 2,
                text: "Static list 8"
            },
        ]
    },
]

// constante qui récupère le state et l'action
// le state est initialisé par défaut avec la constante d'initilaisation "initialState"
const listsReducer = (state = initilaState, action) => {
    // on crée un switch/case qui dépendra du type d'action
    // par défaut, retournera le state.
    switch(action.type) {
        default:
            return state;
    }
}

export default listsReducer;