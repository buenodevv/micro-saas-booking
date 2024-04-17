'use client'
import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Home, Menu, Bell, Package2, Search, CircleUser, ShoppingCart, Package, Users, LineChart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from 'next/image';

function Header() {
    const { user } = useKindeBrowserClient()
    console.log(user)
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className='flex w-full justify-end gap-4'>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div>
                            <Image src={user?.picture} alt={''} width={32} height={32} className="rounded-full hover:scale-110 transition-all" />
                            <span className="sr-only">Toggle user menu</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <LogoutLink>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </LogoutLink>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header
