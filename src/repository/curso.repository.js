import Prisma from"../prisma.js"

export const createCurso =  (CursoData) => {
    return Prisma.curso.create({Data: CursoData})

}

export const readCurso = () => {
    return Prisma.curso.findMany();
}

export const updateCurso = (CursoId, CursoData) => {
    return Prisma.curso.update({
        where: {id: CursoId},
        data: CursoData
    })
}
export const deleteCurso = (CursoId) => {
    return Prisma.curso.delete({
        where: {id: CursoId}
    })
}