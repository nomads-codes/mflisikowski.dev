-- AlterTable
ALTER TABLE "socials" ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "url" SET DEFAULT '',
ALTER COLUMN "mailto" SET DEFAULT '';
