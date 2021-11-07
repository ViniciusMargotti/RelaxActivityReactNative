import React, { useState } from 'react';
import {
  View, Button, Platform, Text, ImageBackground
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Welcome() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [vaiFolgar, setVaiFolgar] = useState(null);

  const styles = {
    resultado: {
      width: '100%', textAlign: 'center', marginTop: 20, fontSize: 18
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const validaFolga = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    setVaiFolgar(validaFolga);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <View style={{ marginTop: 100 }}>
        <Button color="#7CB27C" onPress={showDatepicker} title="Verificar folga" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour
          display="default"
          onChange={onChange}
        />
      )}
      <View>
        {vaiFolgar === null && (
          <>
            <Text style={styles.resultado}>Informe uma data para verificar a folga</Text>
          </>
        )}

        {vaiFolgar && (
          <>
            <Text style={styles.resultado}>Você vai folgar einnn 😁😁😁</Text>
            <ImageBackground style={{ width: '100%', height: '81%' }} source={require('../../../assets/folga.png')} />
          </>
        )}

        {vaiFolgar === false && (
          <>
            <Text style={styles.resultado}>Você não vai folgar 😢😒😢</Text>
            <ImageBackground style={{ width: '100%', height: '87%' }} source={require('../../../assets/naoFolga.png')} />
          </>
        )}
      </View>
    </View>
  );
}
