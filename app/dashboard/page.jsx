import { redirect } from 'next/navigation'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from 'react'

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession()
  return (await isAuthenticated()) ? (
    <h1>Dashboard</h1>
  ) : redirect('/login')


}

export default Dashboard
