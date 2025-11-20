import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        // Mock User (should be from session)
        const user = await prisma.user.findFirst({
            where: { lineId: 'mock-user-123' },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 401 })
        }

        const videos = await prisma.video.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(videos)
    } catch (error) {
        console.error('Error fetching videos:', error)
        return NextResponse.json(
            { error: 'Failed to fetch videos' },
            { status: 500 }
        )
    }
}
