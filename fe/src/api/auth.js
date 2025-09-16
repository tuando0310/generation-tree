const API_URL = 'http://localhost:3001/api/auth'; // Replace with your backend URL (e.g., http://your-backend-url/api)

async function login(credentials) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    // Store JWT in localStorage
    localStorage.setItem('token', data.token);
    return data; // Return data for further use (e.g., user info)
  } catch (error) {
    throw new Error(error.message || 'Network error during login');
  }
}

async function signup({ email, password, name }) {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, personalData: { name } }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-up failed');
    }

    const data = await response.json();
    // Store JWT if returned
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data; // Return user data
  } catch (error) {
    throw new Error(error.message || 'Network error during sign-up');
  }
}

export { login, signup };