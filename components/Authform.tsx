'use client';

import Link from "next/link";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { register, signin } from "@/lib/api";
import { useState } from "react";

const registerContent = {
  linkurl: '/signin',
  linkText: "Already have an account?",
  header: 'Create a new account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register'
}

const signinContent = {
  linkurl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome back!',
  subheader: 'Enter you credentials to access your account',
  buttonText: 'Sign in'
}

const initialState = {email: '', password: '', firstName: '', lastName: ''}

type TMode = 'register' | 'signin'

const AuthForm = (mode: TMode) => {
  const [formState, setFormState] = useState(initialState)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'register'){
      await register(formState)
    } else {
      await signin(formState)
    }
    setFormState(initialState)
    router.replace('/')
  }

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <Card>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl mb-2">{content.header}</h2>
          <p className="text-lg text-black/25">{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="py-10 w-full">
          {mode === 'register' && (
            <div className="flex mb-8 justify-between">
              <div className="pr-2">
                <div className="text-lg mb-4 ml-2 text-black/50">
                  First Name
                </div> 
                <Input 
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) => 
                    setFormState((s) => ({ ...s, firstName: e.target.value}))
                  }
                />
              </div>
              <div className="pl-2">
                <div className="text-lg mb-4 ml-2 text-black/50">Last Name</div>
                <Input 
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) => 
                    setFormState((s) => ({ ...s, lastName: e.target.value}))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Email</div>
            <Input 
              required
              type="email"
              placeholder="Email"
              value={formState.email}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) => 
                    setFormState((s) => ({ ...s, email: e.target.value}))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Password</div>
            <Input 
              required
              type="password"
              placeholder="Password"
              value={formState.password}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) => 
                    setFormState((s) => ({ ...s, password: e.target.value}))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>
                <Link
                  href={content.linkurl}
                  className="text-blue-600 font-bold"
                >{content.linkText}
                </Link>
              </span>
            </div>
          </div>
          <Button type="submit" intent="secondary">
            {content.buttonText}
          </Button>
        </form>
      </div>
    </Card>
  )
}

export default AuthForm;
