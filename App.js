import React from "react";
import { StyleSheet } from "react-native";
import {
  PaperProvider,
  Appbar,
  BottomNavigation,
  Text,
} from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import TareaScreen from "./screens/TareaScreen";
import Calendario from "./screens/CalendarScreen";
import Estadistic from "./screens/EstadisticScreen";



export default function App() {
  const NotasRouter = () => <TareaScreen />;

  const CalendarioRoute = () => <Calendario />;

  const EstadisticaRoute = () => <Estadistic />;



  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Notas",
      title: "Notas",
      focusedIcon: "note",
    },
    { key: "calendario", title: "Calendario", focusedIcon: "calendar" },
    { key: "estadistica", title: "Estadisticas", focusedIcon: "chart-timeline-variant" },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    Notas: NotasRouter,
    calendario: CalendarioRoute,
    estadistica: EstadisticaRoute,

  });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header statusBarHeight={0} mode="small" elevated="true">
            <Appbar.Content title="Agenda" />
            <Appbar.Action
              icon="view-dashboard-edit"
              onPress={() => {
                alert("Opciones de visualisacion");
              }}
            />
            <Appbar.Action
              icon="dots-vertical"
              onPress={() => {
                alert("Mas opciones");
              }}
            />
          </Appbar.Header>

          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
