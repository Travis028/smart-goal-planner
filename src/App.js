import React, { useState, useEffect } from 'react';
import './App.css';
import OverviewPanel from './components/OverviewPanel';
import GoalCard from './components/GoalCard';
import NewGoalForm from './components/NewGoalForm';
import DepositForm from './components/DepositForm';

// Mock API functions
const fetchGoals = async () => {
  return [
    { id: 1, title: 'Sample Goal', targetAmount: 1000, currentAmount: 0 }
  ];
};

const addGoal = async (goalData) => {
  const newGoal = {
    id: Date.now(),
    ...goalData,
    createdAt: new Date().toISOString()
  };
  return newGoal;
};

const updateGoal = async (id, updates) => {
  return updates;
};

const deleteGoal = async (id) => {
  return true;
};

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const data = await fetchGoals();
        setGoals(data);
      } catch (error) {
        console.error('Error loading goals:', error);
      }
    };
    loadGoals();
  }, []);

  // Add a new goal
  const handleAddGoal = async (goalData) => {
    try {
      const newGoal = await addGoal(goalData);
      setGoals([...goals, newGoal]);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  // Update a goal's saved amount
  const handleDeposit = async (goalId, depositAmount) => {
    try {
      const goal = goals.find(g => g.id === goalId);
      const updatedAmount = goal.savedAmount + depositAmount;
      const updatedGoal = await updateGoal(goalId, { savedAmount: updatedAmount });
      setGoals(goals.map(g => g.id === goalId ? updatedGoal : g));
    } catch (error) {
      console.error('Error depositing:', error);
    }
  };

  // Delete a goal
  const handleDeleteGoal = async (goalId) => {
    try {
      await deleteGoal(goalId);
      setGoals(goals.filter(g => g.id !== goalId));
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Goal Planner</h1>
      </header>
      <main>
        <OverviewPanel 
          totalGoals={goals.length} 
          totalAmount={goals.reduce((sum, goal) => sum + goal.savedAmount, 0)}
        />
        <div className="app-container">
          <NewGoalForm onAddGoal={handleAddGoal} />
          <div className="goals-container">
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
