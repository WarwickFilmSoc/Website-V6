'use client';
import { TextInput } from 'flowbite-react';
import { useSearchParams } from 'next/navigation';

export default function LoginForm({ crewPage }: { crewPage?: boolean }) {
  const searchParams = useSearchParams();
  const state = searchParams.get('state');

  return (
    <form action="/login/attempt" method="POST">
      {state === 'loggedOut' && (
        <div className="my-4">Successfully logged out.</div>
      )}
      {state === 'invalid' && (
        <div className="text-red-500 my-4">
          Invalid username or password - please try again.
        </div>
      )}

      {crewPage && <input type="hidden" name="crewPage" value="crew" />}

      <div className="mb-4">
        <label htmlFor="username" className="block mb-0.5 font-bold">
          Username
        </label>
        <TextInput
          id="username"
          name="username"
          placeholder="WSC Username"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-0.5 font-bold">
          Password
        </label>
        <TextInput
          id="password"
          placeholder="WSC Password"
          required
          type="password"
          name="password"
        />
      </div>
      <div className="flex items-center gap-2 mb-6">
        <input type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember" className="block font-bold">
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        className="border-white border-2 rounded-md px-8 py-2 uppercase font-lexend font-bold"
      >
        Login
      </button>
    </form>
  );
}
