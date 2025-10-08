/*
  Warnings:

  - You are about to drop the `USER` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."USER";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpfcpnj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" INTEGER NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL,
    "sellings" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "contactType" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PRODUCT" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL,
    "harvestType" INTEGER NOT NULL,
    "productState" BOOLEAN NOT NULL,
    "harvest" TEXT NOT NULL,
    "unityType" INTEGER NOT NULL,

    CONSTRAINT "PRODUCT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
