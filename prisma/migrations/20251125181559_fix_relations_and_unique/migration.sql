/*
  Warnings:

  - A unique constraint covering the columns `[cpfcnpj]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "farmName" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "revenue" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "createDate" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."AGENDAMENTO" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "farmerId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" INTEGER NOT NULL,
    "scheduledFor" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AGENDAMENTO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CONVERSATION" (
    "id" TEXT NOT NULL,
    "participantAId" TEXT NOT NULL,
    "participantBId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CONVERSATION_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MESSAGE" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "MESSAGE_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CONVERSATION_participantAId_participantBId_key" ON "public"."CONVERSATION"("participantAId", "participantBId");

-- CreateIndex
CREATE INDEX "MESSAGE_conversationId_idx" ON "public"."MESSAGE"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpfcnpj_key" ON "public"."user"("cpfcnpj");

-- AddForeignKey
ALTER TABLE "public"."HARVEST" ADD CONSTRAINT "HARVEST_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ADDRESS" ADD CONSTRAINT "ADDRESS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PRODUCT" ADD CONSTRAINT "PRODUCT_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AGENDAMENTO" ADD CONSTRAINT "AGENDAMENTO_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AGENDAMENTO" ADD CONSTRAINT "AGENDAMENTO_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AGENDAMENTO" ADD CONSTRAINT "AGENDAMENTO_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."PRODUCT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MESSAGE" ADD CONSTRAINT "MESSAGE_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."CONVERSATION"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
