import React from 'react';
import { StyleSheet, View, Scrollview, FlatList, Text, SectionList } from 'react-native';

class Todo extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <SectionList
            sections={[
              { title: 'A', data: ['Alpha'] },
              { title: 'B', data: ['Beta'] },
              { title: 'C', data: ['Charlie'] },
              { title: 'D', data: ['Delta'] },
              { title: 'E', data: ['Echo'] },
              { title: 'F', data: ['Foxtrot'] }, 
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default Todo;