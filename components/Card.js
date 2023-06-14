import React from 'react';
import { Avatar, Button, Card } from 'react-native-paper';
import { StyleSheet } from "react-native";

const LeftContent = props => <Avatar.Icon {...props} icon="notebook-outline" />

const CardNote = (props) => (
  <Card style={styles.EstCard}>
    <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} />

   
    <Card.Actions>
        <Button mode='contained'>Hecho</Button>
    </Card.Actions>
  </Card>
);


const styles = StyleSheet.create({
    EstCard:{
      marginTop: 20,
    }
});

export default CardNote;

