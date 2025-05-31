import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
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
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseItem item={item} />}
    />
  );
}
