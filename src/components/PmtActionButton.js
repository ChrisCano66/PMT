// REACT
import React, { Component } from 'react';
import TextArea from 'react-textarea-autosize';
// REDUX
import { connect } from "react-redux";
import { addList, addCard } from "../Redux/actions";
// MUI
import { Card, Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { Add } from '@material-ui/icons'

class PmtActionButton extends Component {
    // States :
    state = {
        // si le form est ouvert (initialisé sur false)
        formOpen: false
    };    

    // fonction de changement d'état (ouverture) pour le formulaire d'ajout
    openForm = () => {
        this.setState({
            formOpen: true,
        })
    };

    // fonction de changement d'état (fermeture) pour le formulaire d'ajout
    // dès qu'on clique à l'extérieur du form grâce au "onBlur"
    closeForm = () => {
        this.setState({
            formOpen: false,
        })
    };

    // fonction qui va gérer l'état lors des changement d'état (selon l'event) 
    handleInputChange = event => {
        this.setState({
            text: event.target.value
        });
    };
    
    // fonction qui va permettre de gérer la création de liste
    handleAddList = () => {
        // récupère les props de l'application grâce au "dispatch/connect" de la classe 
        const { dispatch } = this.props;
        // récupère le text du state
        const { text } = this.state;

        // s'il y a un texte, on dispatch l'action "addList" avec le texte
        if (text) {
            this.setState ({
                text: ""
            });
            dispatch(addList(text));
        };

        // si c'est pas le cas, juste un return
        return;
    };

    // fonction qui va permettre de gérer la création de carte
    handleAddCard = () => {
        // récupère les props de l'application grâce au "dispatch/connect" de la classe 
        const { dispatch, listID } = this.props;
        // récupère le text du state
        const { text } = this.state;

        // s'il y a un texte, on dispatch l'action "addList" avec le texte
        if (text) {
            this.setState ({
                text: ""
            });
            dispatch(addCard(listID, text));
        };

        // si c'est pas le cas, juste un return
        return;
    };

    // fonction de rendu du formulaire d'ajout
    renderForm = () => {
        // constante sous forme de liste qui reprend les props
        const { list } = this.props;

        // constante placeholder pour la liste
        const placeholder = list ? "Entrer le titre la liste..." : "Enter un titre pour cette carte";

        // constante titre du bouton qui permettra d'ajouter une la liste ou une carte
        const buttonTitle = list ? "Ajouter une liste" : "Ajouter une carte";

        // rendu de la fonction
        return <div>
            <Card
                style={{
                    minHeight: 80,
                    minWidth: 272,
                    padding: "6px 8px 2px",
                }}
            >
                <TextArea
                    placeholder= {placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none",
                        overflow: "hidden",
                    }}
                />
            </Card>
            <div style={styles.FormButtonGroup}>
                <Button 
                    // au clic on vérifie si c'est une liste ou une carte, l'action sera différente en conséquence
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    style={{
                        color: "white", 
                        backgroundColor: "green",
                    }}
                >
                    {buttonTitle} {" "}
                </Button>
                <Icon style={{ marginLeft: 8, paddingTop: 6, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
    };
     
    // fonction qui permettra de rendre un bouton pour l'ajout d'une list
    renderAddButton = () => {
        // on recupère la props list
        const {list} = this.props;

        // texte du bouton 
        const buttonText = list ? "Ajouter une nouvelle Liste" : "Ajouter une nouvelle Carte";
        // opacité du bouto
        const buttonTextOpacity = list ? 1 : 0.5;
        // couleur du texte
        const buttonTextColor = list ? "whitesmoke" : "inherit";
        // couleur du bckground
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        // on retourne une div avec un icone + et le txt du bouton
        return (
            <div 
                onClick={this.openForm} 
                style={{                
                    ...styles.ButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground,
                }}
            >
                <Icon><Add/></Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    // rendu de la classe
    render () {
        // si l'état du form est sur true (grâce clic), on rend le formulaire, sinon on rend le bouton d'ajout
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

// style pour les boutons d'ajout
const styles = {
    ButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRaduis: 3,
        width: 272,
        height: 36,
        paddingLeft: 10,
    },
    FormButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItem: "center",
    },
};

export default connect () (PmtActionButton);