/*
  Warnings:

  - The primary key for the `Roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Roles` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Roles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleName]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleName` to the `Roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Roles_name_key";

-- AlterTable
ALTER TABLE "Roles" DROP CONSTRAINT "Roles_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "roleId" SERIAL NOT NULL,
ADD COLUMN     "roleName" TEXT NOT NULL,
ADD CONSTRAINT "Roles_pkey" PRIMARY KEY ("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_roleName_key" ON "Roles"("roleName");
