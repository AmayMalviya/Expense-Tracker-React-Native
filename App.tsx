import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import AddExpense from './src/screens/AddExpense';
import ViewExpensesScreen from './src/screens/ViewExpense';
import { Expense } from './src/types';

export type RootStackParamList = {
  Launch: undefined;
  AddExpense: { expenses: Expense[] } | undefined;
  ViewExpenses: { expenses: Expense[] } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddExpense" options={{ title: 'Add Expense' }}>
          {props => (
            <AddExpense
            switchToView={function (): void {
              throw new Error('Function not implemented.');
            } } {...props}
            expenses={expenses}
            setExpenses={setExpenses}            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ViewExpenses" options={{ title: 'View Expenses' }}>
  {props => (
    <ViewExpensesScreen
      {...props}
      expenses={expenses}
      setExpenses={setExpenses}
    />
  )}
</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
