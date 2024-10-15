/*
  Warnings:

  - Changed the type of `updated_date` on the `Categories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `created_date` on the `Categories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "updated_date",
ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL,
DROP COLUMN "created_date",
ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL;
