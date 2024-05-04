"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

function inputDoctorCreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const status = "ativo";
  const { register, handleSubmit } = useForm();
  const handleCreateSubmit = async (data) => {
    setBtnLoading(true);
    try {
      const res = await fetch("/api/doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setBtnLoading(false);
        toast("Médico cadastrado com sucesso criado com sucesso!", {
          type: "success",
        });
        // redirecionar ou atualizar a lista de posts
      } else {
        toast("Erro ao cadastrar", {
          type: "destructive",
        });
      }
    } catch (error) {
      toast("Médico cadastrado com sucesso criado com sucesso!", {
        type: "destructive",
      });
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>Cadastro de Médico</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <form>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  {...register("name")}
                  placeholder="Digite o nome"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  placeholder="Digite o email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  {...register("telephone")}
                  id="phone"
                  placeholder="Digite o telefone"
                  type="text"
                  value={telephone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Label htmlFor="specialty">Especialidade</Label>
                <Input
                  {...register("specialty")}
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
            <Button
              onClick={handleSubmit(handleCreateSubmit)}
              disabled={!name || !email || !phone || !specialty}
            >
              {btnLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Salvar
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default inputDoctorCreate;
