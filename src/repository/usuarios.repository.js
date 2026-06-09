import Prisma from"../prisma.js"

export const createUser =  (userData)=>{
    return Prisma.usuarios.create({data: userData})

}

export const readUser = ()=>{
    return Prisma.usuarios.findMany();

}
export const updateUser = (userId, userData)=>{
    return Prisma.usuarios.update({
        where: {id: userId}, 
        data: userData})

}
export const deleteUser = (userId)=> {
    return Prisma.usuario.delete({
        where: {id: userId}})
}