import Prisma from"../prisma.js"

export const createUser =  (userData)=>{
    return Prisma.user.create({Data: userData})

}

export const readUser = ()=>{
    return Prisma.user.findMany();

}
export const updateUser = (userId, userData)=>{
    return Prisma.user.update({
        where: {id: userId}, 
        data: userData})

}
export const deleteUser = (userid)=> { 
    return Prisma.user.delete({
        where: {id: userId}})
}