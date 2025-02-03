import { PrismaClient } from '@prisma/client'
import sampleData from './sample-data'

/* Run in terminal with: npx tsx ./db/seed */

async function main() {
  const prisma = new PrismaClient()

  //Reset DB
  await prisma.product.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verificationToken.deleteMany()
  await prisma.user.deleteMany()

  await prisma.product.createMany({ data: sampleData.products })
  await prisma.user.createMany({ data: sampleData.users })

  console.log('DB Seeded succesfully')
}

main()
