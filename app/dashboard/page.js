
import { Button } from '@/components/ui/button'

import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from 'react'

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession()
  return (await isAuthenticated()) ? (
    <h1>Dashboard</h1>
  ) : (<h1>Usuario não autenticado</h1>)


}

export default Dashboard
