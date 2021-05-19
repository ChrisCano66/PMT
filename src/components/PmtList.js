// REACT
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
// COMPONENT
import PmtCard from './PmtCard';
import PmtActionButton from './PmtActionButton';


// creation d'une liste "principale" pour le PMT
// on attend un titre, les diférentes card de la liste
const PmtList = ({title, cards, listID}) => {
    return (
        // détermination de la zone où les objets (cartes d'une liste) pourront être drag and dropper
        <Droppable doppableId={String(listID)}>
            {/** Tout ce qui est dans une zone DnD doit être dans une fonction de rendu donc on met la liste 
             * dans une fonction avec un argument "provided" qui sera passer à la div qui est rendue 
             * ("...provided.droppableProps" pour assurer que l'objet est bien une zone où l'on peut dropper des objet draggable) 
             * On doit aussi passer une référence à la div ("ref") qui est donner par le "provided" */}
            { provided => (
                // une liste
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.listContainer}>
                    <h4>{title}</h4>
                    {/** on affiche l'ensemble des listes principales en les "mappant" (ne pas oublier la key unique) 
                     * on récupère ainsi les différentes carte aec leurs index pour le DnD */}
                    { cards.map((card, index) => 
                        <PmtCard 
                            // key pour le map
                            key={card.id} 
                            // text de la carte
                            text={card.text}
                            // index pour le DnD
                            index={index}
                            // id pour le DnD
                            id={card.id}
                        />
                    )}
                    {/** gestion des bouton d'action ajout et fermeture pour l'ajout d'une liste/carte */}
                    <PmtActionButton listID={listID}/>
                    {/** Permet de créer un espace vide entre les cartes pour placer les carte lors du DnD (effet visuel) */}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
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