import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Searchbar, FAB } from "react-native-paper";
import CardNote from "../components/Card";

export default function TareaScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
    <ScrollView>
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
      <CardNote title="Lavar" subtitle="Limpiar la house"  />
    </View>

    </ScrollView>
        <FAB
        icon="plus"
        color="#fff"
       
        style={styles.fab}
        onPress={() => alert('Agregar tarea')}
      />
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      marginRight: 30,
      right: 0,
      bottom: 0,
      backgroundColor: 'orange',
   
    
    },

});
