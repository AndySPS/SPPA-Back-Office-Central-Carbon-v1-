import React, { useState } from 'react';
import { Icons } from './Icons';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-canvas)] p-[var(--space-md)]">
      <div className="card w-full max-w-md bg-[var(--color-bg-surface)] shadow-xl border border-[var(--color-border-default)]">
        <div className="card-body p-[var(--space-xl)]">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-[var(--space-lg)]">
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Central_Retail_Logo.svg/500px-Central_Retail_Logo.svg.png" 
              alt="Central Retail" 
              className="h-16 w-auto mb-[var(--space-md)]"
            />
            <h2 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">
              Welcome Back
            </h2>
            <p className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-sm)] mt-[var(--space-xs)]">
              Sign in to your carbon accounting dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--space-lg)]">
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Email</span>
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="input input-bordered w-full pl-10 text-[length:var(--font-size-base)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)]"
                  required 
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.Mail className="h-5 w-5 text-[var(--color-text-disabled)]" />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
               <label className="label pl-0 pt-0 justify-between">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Password</span>
                <a href="#" className="label-text-alt link link-hover text-[var(--color-brand-primary)] text-[length:var(--font-size-xs)] font-medium">
                  Forgot password?
                </a>
              </label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 text-[length:var(--font-size-base)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)]"
                  required 
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.Lock className="h-5 w-5 text-[var(--color-text-disabled)]" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`btn btn-primary w-full bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white hover:bg-[#d00000] hover:border-[#d00000] normal-case text-[length:var(--font-size-base)] ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-[var(--space-lg)] text-center text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
            Don't have an account? <a href="#" className="link link-hover text-[var(--color-brand-primary)] font-medium">Contact Admin</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;