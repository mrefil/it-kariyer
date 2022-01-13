import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useEffect } from 'react';
import AuthForm from '../components/auth/auth-form';
import { useState } from 'react/cjs/react.development';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then(session => {
      if(session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    })
  }, [router]);

  if(isLoading) {
    return <p></p>
  }

  return <AuthForm />;
}

export default AuthPage;
