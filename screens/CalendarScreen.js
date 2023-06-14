
import React, {useState} from 'react';
import {Calendar, CalendarList} from 'react-native-calendars';

const Calendario = () => {
  const [selected, setSelected] = useState('');

  return (
    <CalendarList
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        '2023-06-01': {selected: true, marked: true, selectedColor: 'orange'},
        '2023-06-05': {selected: true, marked: true, selectedColor: 'orange'},
        '2023-06-13': {selected: true, marked: true, selectedColor: 'orange'}
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
      }}

     
 
    />
  );
};

export default Calendario;
