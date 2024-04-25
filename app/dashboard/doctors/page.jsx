'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

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

function Doctors() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setPhone] = useState("")
    const [specialty, setSpecialty] = useState("")
    const status = "ativo"
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("clicou")
        try {
            const res = await fetch('/api/doctor', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, telephone, specialty, status }),
            });
      
            if (res.ok) {
              toast("Médico cadastrado com sucesso criado com sucesso!", { type: 'success' });
              // redirecionar ou atualizar a lista de posts
            } else {
              console.error('Erro ao criar o post');
            }
          } catch (error) {
            console.error('Erro ao criar o post:', error);
          }
       
      };
   
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
                            <form>
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
                                value={telephone}
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
                            </form>
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <Button disabled={!name || !email || !phone || !specialty} onClick={handleSubmit}>Salvar</Button>
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
