import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"
import { Prisma, PrismaClient } from "@prisma/client/extension";

const databaseUrl = process.env,databaseUrl;

if(!databaseUrl){
    throw new Error("La url de la base de datos no esta disponible")
}

const adapter= new PrismaPg(databaseUrl)
const prisma= new PrismaClient(adapter);

export default Prisma;