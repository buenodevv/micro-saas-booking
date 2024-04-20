'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleCreateDoctor, prisma } from '@/app/lib/prisma'

function Doctors() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [specialty, setSpecialty] = useState("")
   
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Adicionar</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                            Cadastro de Médico
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="nome">
                                Nome
                            </Label>
                           <Input
                           placeholder="Digite o nome"
                           type="text"
                           value={name}                          
                           onChange={(e) => setName(e.target.value)}
                           />
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="Digite o email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Label htmlFor="phone">
                                Telefone
                            </Label>
                            <Input
                                id="phone"
                                placeholder="Digite o telefone"
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Label htmlFor="specialty">
                                Especialidade
                            </Label>
                            <Input
                                id="specialty"
                                placeholder="Digite a especialidade"
                                type="text"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <Button disabled={!name || !email || !phone || !specialty}>Salvar</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Doctors
