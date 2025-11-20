import prisma from '@/lib/prisma'
import { TemplatesClient } from './TemplatesClient'

export const dynamic = 'force-dynamic'

export default async function TemplatesPage() {
    const templates = await prisma.template.findMany()

    return <TemplatesClient templates={templates} />
}
