import Prisma from"../prisma.js"

export const createGrado =  (GradoData) => {
    return Prisma.grado.create({Data: GradoData})

}

export const readGrado = () => {
    return Prisma.grado.findMany();

}
export const updateGrado = (GradoId, GradoData) => {
    return Prisma.grado.update({
        where: {id: GradoId}, 
        data: GradoData})

}
export const deleteGrado = (GradoId) => { 
    return Prisma.grado.delete({
        where: {id: GradoId}
    })

}