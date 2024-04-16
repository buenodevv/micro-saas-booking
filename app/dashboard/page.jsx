
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from 'react'

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession()
  return (await isAuthenticated()) ? (
    <h1>Dashboard</h1>
  ) : redirect('/login')


}

export default Dashboard
