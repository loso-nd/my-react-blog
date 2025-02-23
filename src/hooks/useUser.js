import { useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UseUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      setUser(user);
      setIsLoading(false);
    })
  
    /**
     * allows us to cancel subscription & avoid momory leaks, 
     * if user navigates away from page
     * 
     * */ 
    return unsubscribe;
  }, [])
  

  return {user, isLoading}
}

export default UseUser;