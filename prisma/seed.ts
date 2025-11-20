import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Clear existing templates
    await prisma.template.deleteMany()

    const categories = [1, 2, 3]
    const templatesPerCategory = 5

    for (const category of categories) {
        for (let i = 1; i <= templatesPerCategory; i++) {
            await prisma.template.create({
                data: {
                    category,
                    title: `Category ${category} - Template ${i}`,
                    videoUrl: `https://example.com/videos/cat${category}_${i}.mp4`, // Placeholder
                    thumbnail: `https://placehold.co/600x400?text=Cat${category}+Template${i}`, // Placeholder
                },
            })
        }
    }

    console.log('Seed data inserted')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
