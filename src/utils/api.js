const API_URL = 'https://smart-goal-planner-json-server.onrender.com';
export const fetchGoals = async () => {
  try {
    const response = await fetch(`${API_URL}/goals`);
    if (!response.ok) {
      throw new Error('Failed to fetch goals');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error;
  }
};

export const addGoal = async (goalData) => {
  try {
    const response = await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goalData)
    });
    if (!response.ok) {
      throw new Error('Failed to add goal');
    }
    return response.json();
  } catch (error) {
    console.error('Error adding goal:', error);
    throw error;
  }
};

export const updateGoal = async (goalId, updates) => {
  try {
    const response = await fetch(`${API_URL}/goals/${goalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });
    if (!response.ok) {
      throw new Error('Failed to update goal');
    }
    return response.json();
  } catch (error) {
    console.error('Error updating goal:', error);
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await fetch(`${API_URL}/goals/${goalId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete goal');
    }
    return true;
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error;
  }
};