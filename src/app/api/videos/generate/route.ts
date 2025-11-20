import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { templateIds } = body

        // Mock User (Get or Create)
        let user = await prisma.user.findFirst({
            where: { lineId: 'mock-user-123' },
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    lineId: 'mock-user-123',
                    name: 'Demo User',
                },
            })
        }

        // Create Video Record
        const video = await prisma.video.create({
            data: {
                userId: user.id,
                templateIds: JSON.stringify(templateIds),
                status: 'completed', // Mock immediate completion
                downloadUrl: 'https://example.com/mock-video.mp4', // Mock URL
                plan: body.plan || 'free',
            },
        })

        return NextResponse.json({ id: video.id })
    } catch (error) {
        console.error('Error generating video:', error)
        return NextResponse.json(
            { error: 'Failed to generate video' },
            { status: 500 }
        )
    }
}
