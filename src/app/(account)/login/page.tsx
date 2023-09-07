import LoginForm from '@/components/login-form';
import { getAuthedUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const user = await getAuthedUser(false);
  if (user) return redirect('/account');

  return (
    <main>
      <h1 className="mb-1">Login</h1>
      <LoginForm />
    </main>
  );
}
