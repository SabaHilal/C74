import React from 'react';
import { Text, View } from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTransactions: [],
      //lastVisibleTransaction: null,
      //search:''
    }
  }  

  componentDidMount = async ()=>{
    const query = await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [...this.state.allTransactions,doc.data()],
        //lastVisibleTransaction: doc
      })
    })
  }

  render() {
      return (
        <ScrollView>
         {this.state.allTransactions.map((transaction,index)=>{
           return(
            <View key={index} style={{borderBottomWidth: 2}}>
              <Text>{"Book Id: " + transaction.bookId}</Text>
              <Text>{"Student id: " + transaction.studentId}</Text>
              <Text>{"Transaction Type: " + transaction.transactionType}</Text>
              
            </View>
           )
         })}
          
           </ScrollView>
 
      );
    }
  }
