import Prisma from"../prisma.js"

export const createlugar =  (lugarData) => {
    return Prisma.Lugar.create({Data: lugarData})

}

export const readlugar = () => {
    return Prisma.Lugar.findMany();

}
export const updatelugar = (lugarId, lugarData) => {
    return Prisma.Lugar.update({
        where: {id: lugarId}, 
        data: lugarData})

}
export const deletelugar = (lugarId) => { 

    return Prisma.Lugar.delete({
        where: {id: lugarId}
    })
}