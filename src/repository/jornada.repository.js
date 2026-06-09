import Prisma from"../prisma.js"

export const createjornada =  (jornadaData) => {
    return Prisma.jornada.create({Data: jornadaData})

}

export const readjornada = () => {
    return Prisma.jornada.findMany();
}

export const updatejornada = (jornadaId, jornadaData) => {
    return Prisma.jornada.update({
        where: {id: jornadaId}, 
        data: jornadaData})

}
export const deletejornada = (jornadaId) => { 
    return Prisma.jornada.delete({
        where: {id: jornadaId}
    })

}