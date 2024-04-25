'use server'

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(req) {
try {
  const data = await req.json();
  console.log(data);
  const { name, email, telephone, specialty, status } = data;
  const newDoctor = await prisma.doctor.create({
    data: {
      name,
      email,
      telephone,
      specialty,
      status
      
    }
  });
  return NextResponse.json(newDoctor);

} catch (error) {
  console.log("Error creating doctor: ", error);
}}