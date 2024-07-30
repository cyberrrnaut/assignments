import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function insertUser(email: string, name: string) {
    try {
        const response = await prisma.user.create({
            data: {
                email: email,
                name: name,
            },
        });

        console.log(response);
    } catch (err) {
        console.log(`error`, err);
    }
}

//insertUser("cyberrrnaut@gmail.com", "Soumyendu");
