import { redirect } from 'next/navigation'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import React from 'react'
import { Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession()
  return (await isAuthenticated()) ? (
    <div className='grid grid-cols-3 gap-4'>
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Agendamentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
        <Separator className="bg-primary mt-2 mb-2 "  />
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Agendamentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
        <Separator className="bg-green-500 mt-2 mb-2 "  />
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Agendamentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
        <Separator className="bg-red-500 mt-2 mb-2 "  />
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Agendamentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
        <Separator className="bg-yellow-500 mt-2 mb-2 "  />
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
    <Card x-chunk="dashboard-01-chunk-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Agendamentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
        <Separator className="bg-orange-500 mt-2 mb-2 "  />
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
    </div>
  ) : redirect('/login')


}

export default Dashboard
