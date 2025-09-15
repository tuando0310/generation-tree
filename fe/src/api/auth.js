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

async function signup(userData) {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-up failed');
    }

    const data = await response.json();
    // Optionally store JWT if your backend returns it on signup
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data; // Return data for further use
  } catch (error) {
    throw new Error(error.message || 'Network error during sign-up');
  }
}

export { login, signup };