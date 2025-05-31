import React, { useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Expense } from '../types';

interface Props {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

export default function ViewExpenses({ expenses, setExpenses }: Props) {
  useEffect(() => {
    const loadExpenses = async () => {
      const stored = await AsyncStorage.getItem('expenses');
      if (stored) setExpenses(JSON.parse(stored));
    };
    loadExpenses();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      {expenses.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No expenses found. Add one!</Text>
        </View>
      ) : (
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExpenseItem item={item} />}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
