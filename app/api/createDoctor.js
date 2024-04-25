'use server'

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const { name, email, telephone, specialty, status } = req.body;

    try {
      const post = await prisma.doctor.create({
        data: {
          name,
          email,
          telephone,
          specialty,
          status
        },
      });

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o post' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}