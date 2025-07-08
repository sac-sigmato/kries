export interface User {
  id: string
  email: string
  role?: string
}

// Mock authentication - replace with your preferred auth solution
let currentUser: User | null = null;

export const signIn = async (email: string, password: string) => {
  // Mock authentication logic
  if (email === 'admin@educollege.edu' && password === 'admin123') {
    currentUser = {
      id: '1',
      email: 'admin@educollege.edu',
      role: 'admin'
    };
    return { user: currentUser };
  }
  throw new Error('Invalid credentials');
}

export const signOut = async () => {
  currentUser = null;
}

export const getCurrentUser = async (): Promise<User | null> => {
  return currentUser;
}

export const getSession = async () => {
  return currentUser ? { user: currentUser } : null;
}

export const createUser = async (email: string, password: string, role: string) => {
  // Mock user creation
  return {
    id: '1',
    email,
    role
  };
}