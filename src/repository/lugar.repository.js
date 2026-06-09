import Prisma from"../prisma.js"

export const createlugar =  (lugarData) => {
    return Prisma.lugar.create({Data: lugarData})

}

export const readlugar = () => {
    return Prisma.lugar.findMany();

}
export const updatelugar = (lugarId, lugarData) => {
    return Prisma.lugar.update({
        where: {id: lugarId}, 
        data: lugarData})

}
export const deletelugar = (lugarId) => { 

    return Prisma.lugar.delete({
        where: {id: lugarId}
    })
}