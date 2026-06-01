import Prisma from"../prisma.js"

export const createjornada =  (jornadaData) => {
    return Prisma.Jornada.create({Data: jornadaData})

}

export const readjornada = () => {
    return Prisma.Jornada.findMany();
}

export const updatejornada = (jornadaId, jornadaData) => {
    return Prisma.Jornada.update({
        where: {id: jornadaId}, 
        data: jornadaData})

}
export const deletejornada = (jornadaId) => { 
    return Prisma.Jornada.delete({
        where: {id: jornadaId}
    })

}