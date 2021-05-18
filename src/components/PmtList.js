// REACT
import React from 'react';

// COMPONENT
import PmtCard from './PmtCard';
import PmtActionButton from './PmtActionButton';


// creation d'une liste "principale" pour le PMT
// on attend un titre, les diférentes card de la liste
const PmtList = ({title, cards, listID}) => {
    return (
        <div style={styles.listContainer}>
            <h4>{title}</h4>
            {/** on affiche l'ensemble des listes principales en les "mappant" (ne pas oublier la key unique) */}
            { cards.map(card => 
                <PmtCard 
                    key={card.id} 
                    text={card.text}
                />
            )}
            {/** gestion des bouton d'action ajout et fermeture pour l'ajout d'une liste/carte */}
            <PmtActionButton listID={listID} />
        </div>
    )
}

// style pour les PmtList
const styles = {
    listContainer: {
        backgroundColor: "#dfe3e6",
        borderRadius: 5,
        width: 300,
        Height: "100%",
        padding: 10,
        marginRight: 8,
    }
}

export default PmtList;