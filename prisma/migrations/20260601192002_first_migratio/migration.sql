-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "id_curso" INTEGER,
    "contraseña" VARCHAR(255) NOT NULL,
    "id_tipo_documento" INTEGER NOT NULL,
    "numero_documento" VARCHAR(30) NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupo" (
    "id" SERIAL NOT NULL,
    "grupo" VARCHAR(10) NOT NULL,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jornada" (
    "id" SERIAL NOT NULL,
    "jornada" VARCHAR(30) NOT NULL,

    CONSTRAINT "jornada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lugar" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,

    CONSTRAINT "lugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rol" (
    "id" SERIAL NOT NULL,
    "rol" VARCHAR(50) NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_documento" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "tipo_documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" SERIAL NOT NULL,
    "id_grupo" INTEGER NOT NULL,
    "id_jornada" INTEGER NOT NULL,
    "id_grado" INTEGER NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro" (
    "id" SERIAL NOT NULL,
    "inicio" TIME(0) NOT NULL,
    "final" TIME(0) NOT NULL,
    "id_profesor" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_lugar" INTEGER NOT NULL,
    "descrip" TEXT,
    "horas_totales" DECIMAL(10,2),

    CONSTRAINT "registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_numero_documento_key" ON "usuarios"("numero_documento");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_id_tipo_documento_fkey" FOREIGN KEY ("id_tipo_documento") REFERENCES "tipo_documento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_id_jornada_fkey" FOREIGN KEY ("id_jornada") REFERENCES "jornada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro" ADD CONSTRAINT "registro_id_lugar_fkey" FOREIGN KEY ("id_lugar") REFERENCES "lugar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
