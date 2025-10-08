/*
  Warnings:

  - You are about to drop the column `cpfcpnj` on the `user` table. All the data in the column will be lost.
  - Added the required column `cpfcnpj` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "cpfcpnj",
ADD COLUMN     "cpfcnpj" TEXT NOT NULL;
