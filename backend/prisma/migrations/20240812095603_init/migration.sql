-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "timer" INTEGER NOT NULL,
    "discription" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
