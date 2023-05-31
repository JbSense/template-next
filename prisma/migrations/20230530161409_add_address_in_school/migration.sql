/*
  Warnings:

  - Added the required column `city` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schools` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `district` VARCHAR(191) NOT NULL,
    ADD COLUMN `number` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL;
