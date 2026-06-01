import Prisma from"../prisma.js"

export const createCurso =  (CursoData) => {
    return Prisma.Curso.create({Data: CursoData})

}

export const readCurso = () => {
    return Prisma.Curso.findMany();
}

export const updateCurso = (CursoId, CursoData) => {
    return Prisma.Curso.update({
        where: {id: CursoId},
        data: CursoData
    })
}
export const deleteCurso = (CursoId) => {
    return Prisma.Curso.delete({
        where: {id: CursoId}
    })
}