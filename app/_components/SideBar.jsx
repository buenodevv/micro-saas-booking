'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function SideBar() {
  const path = usePathname()
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src='/logo.svg' alt='logo' width={32} height={32} />
            <span className="text-sm font-bold text-primary ">Saas-Boilerpleite</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg ${path === '/dashboard' && 'bg-muted text-primary'} px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="dashboard/patients"
              className={`flex items-center gap-3 rounded-lg ${path === '/dashboard/patients' && 'bg-muted text-primary'} px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted`}
            >
              <ShoppingCart className="h-4 w-4" />
              Patients
            </Link>
            <Link
              href="dashboard/doctors"
              className={`flex items-center gap-3 rounded-lg ${path === '/dashboard/doctors' && 'bg-muted text-primary'} px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted `}
            >
              <Package className="h-4 w-4" />
              Doctors
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg ${path === '/dashboard/customers' && 'bg-muted text-primary'} px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-3 rounded-lg ${path === '/dashboard/analytics' && 'bg-muted text-primary'} px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted`}
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SideBar
