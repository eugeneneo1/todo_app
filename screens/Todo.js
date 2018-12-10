import React from 'react';
import { StyleSheet, View, Scrollview } from 'react-native';

class Todo extends React.Component {
    render() {
        return (
            <Scrollview>
                <View style={styles.container1} />
                <View style={styles.container2} />  
                <View style={styles.container3} />
            </Scrollview> 
        );
    }   
}

const styles = StyleSheet.create({
    container1: {
        padding: 100,
        backgroundColor: 'blue'
    },
    container2: {
        padding: 100,
        backgroundColor: 'silver'
    },
    container3: {
        padding: 100,
        backgroundColor: 'black'
    },
});
export default Todo;