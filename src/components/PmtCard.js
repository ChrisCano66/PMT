// REACT
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
// MUI
import { Card, CardContent, Typography } from '@material-ui/core';


// creation d'une list pour le PMT
// on attend un titre
const PmtCard = ({text, id, index}) => {
    return (
        // création d'un objet drag and droppable (les cartes) et a besoin d'une id pour fonctionné (qui vient de la liste)
        // a aussi besoin d'un index pour les porps
        <Draggable draggableId={String(id)} index={index}>
            {/** Comme nous sommes dans une zone DnD, on doit aussi être dans une fonction de rendu. Donc on met la carte
             * dans une fonction où l'on doit passer la référence, fournie par le "provided" au niveau de la zonne dropable, à la div ("ref") 
             * On doit aussi lui passer le "...provided.draggableProps" pour assurer que l'objet est draggable 
             * On doit aussi lui passer le "...provided.dragHandleProps" pour gérer le DnD au niveau de la carte */}
            { provided => (
                // une carte d'une liste
                <div 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <Card style={styles.cardContainer}>
                        <CardContent>
                            <Typography gutterBottom>{text}</Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}

// style pour les PmtCard
const styles = {
    cardContainer: {
        marginBottom: 8,
    }
}

export default PmtCard;