'use client'
import React from 'react'
import {
    Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeadCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { prisma } from '@/app/lib/prisma'
async function Doctors() {
const doctors = await prisma.doctor.findMany()    
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button><PlusIcon/>Salvar</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                            Anyone who has this link will be able to view this.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            <Input
                                id="link"
                                defaultValue="https://ui.shadcn.com/docs/installation"
                                readOnly
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        <Table>
            <TableHead >Nome</TableHead>
            <TableHead >Especialidade</TableHead>
            <TableHead >Email</TableHead>
                {doctors.map((doctor) => (
            <TableBody>
                    <TableCell>{doctor.name}</TableCell>
                    <TableCell>{doctor.specialty}</TableCell>
                    <TableCell>{doctor.email}</TableCell>
            </TableBody>
                ))}

            
        </Table>
        </div>

    )
}

export default Doctors
