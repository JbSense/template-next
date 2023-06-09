/*
  Warnings:

  - A unique constraint covering the columns `[birthCertificate]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nis]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `student` MODIFY `birthdate` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Student_birthCertificate_key` ON `Student`(`birthCertificate`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_cpf_key` ON `Student`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_rg_key` ON `Student`(`rg`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_nis_key` ON `Student`(`nis`);
