'use client';
import { Checkbox, TextInput } from 'flowbite-react';

export default function LoginForm() {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-0.5 font-bold">
          Username
        </label>
        <TextInput id="username" placeholder="WSC Username" required />
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
        />
      </div>
      <div className="flex items-center gap-2 mb-6">
        <Checkbox id="remember" />
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
