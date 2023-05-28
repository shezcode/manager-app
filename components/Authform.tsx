'use client';

import Link from "next/link";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { register, signin } from "@/lib/api";
import { useCallback, useState } from "react";

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
