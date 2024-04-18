import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const handleCreateDoctor = async (name, email, phone, specialty) => {
    await prisma.doctor.create({
        data: {
            name: name,
            email: email,
            phone: phone,
            specialty: specialty
        }
    })
}
export { handleCreateDoctor }