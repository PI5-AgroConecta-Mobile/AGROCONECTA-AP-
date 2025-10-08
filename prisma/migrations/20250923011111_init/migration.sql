-- CreateTable
CREATE TABLE "public"."USER" (
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

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HARVEST" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HARVEST_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ADDRESS" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "ADDRESS_pkey" PRIMARY KEY ("id")
);
