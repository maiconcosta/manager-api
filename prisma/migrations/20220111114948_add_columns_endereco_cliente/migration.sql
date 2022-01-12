/*
  Warnings:

  - You are about to drop the column `nome` on the `EnderecoCliente` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `EnderecoCliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnderecoCliente" DROP COLUMN "nome",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "logradouro" TEXT NOT NULL,
ADD COLUMN     "numero" INTEGER NOT NULL;
