const API_BASE_URL = 'http://localhost:3001/api/persons';

// Helper function to get JWT from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Get all people
export const getAllPeople = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching people: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getAllPeople error:', error);
    throw error;
  }
};

// Get person by ID
export const getPersonById = async (personId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${personId}`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching person ${personId}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getPersonById error:', error);
    throw error;
  }
};

// Get person by user ID
export const getPersonByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching person for user ${userId}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getPersonByUserId error:', error);
    throw error;
  }
};

// Create a new person
export const createPerson = async (personData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(personData),
    });
    if (!response.ok) {
      throw new Error(`Error creating person: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('createPerson error:', error);
    throw error;
  }
};

// Update a person
export const updatePerson = async (personId, personData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${personId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(personData),
    });
    if (!response.ok) {
      throw new Error(`Error updating person ${personId}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('updatePerson error:', error);
    throw error;
  }
};

// Delete a person
export const deletePerson = async (personId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${personId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      throw new Error(`Error deleting person ${personId}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('deletePerson error:', error);
    throw error;
  }
};

// Add parent to a person
export const addParent = async (parentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add-parent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(parentData),
    });
    if (!response.ok) {
      throw new Error(`Error adding parent: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('addParent error:', error);
    throw error;
  }
};

// Add child to a person
export const addChild = async (childData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add-child`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(childData),
    });
    if (!response.ok) {
      throw new Error(`Error adding child: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('addChild error:', error);
    throw error;
  }
};

// Add spouse to a person
export const addSpouse = async (spouseData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add-spouse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(spouseData),
    });
    if (!response.ok) {
      throw new Error(`Error adding spouse: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('addSpouse error:', error);
    throw error;
  }
};