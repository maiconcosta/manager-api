/*
  Warnings:

  - Made the column `nome` on table `Cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telefone` on table `Cliente` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `total` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "telefone" SET NOT NULL;

-- AlterTable
ALTER TABLE "EnderecoCliente" ALTER COLUMN "complemento" DROP NOT NULL,
ALTER COLUMN "numero" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "total" DECIMAL(10,2) NOT NULL;
