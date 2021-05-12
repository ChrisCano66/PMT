// REACT
import React from 'react';

// MUI
import { Card, CardContent, Typography } from '@material-ui/core';


// creation d'une list pour le PMT
// on attend un titre
const PmtCard = ({text}) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography gutterBottom>{text}</Typography>
            </CardContent>
        </Card>
    )
}

// style pour les PmtCard
const styles = {
    cardContainer: {
        marginBottom: 8,
    }
}

export default PmtCard;