// REACT
import React from 'react';

// COMPONENT
import PmtCard from './PmtCard'


// creation d'une liste "principale" pour le PMT
// on attend un titre, les diférentes card de la liste
const PmtList = ({title, cards}) => {
    return (
        <div style={styles.listContainer}>
            <h4>{title}</h4>
            {/** on affiche l'ensemble des listes principales en les "mappant" */}
            { cards.map(card => <PmtCard text={card.text}/>)}
        </div>
    )
}

// style pour les PmtList
const styles = {
    listContainer: {
        backgroundColor: "#dfe3e6",
        borderRadius: 5,
        width: 300,
        padding: 10,
        marginRight: 8,
    }
}

export default PmtList;