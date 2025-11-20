import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { videoId, scheduledTime } = body

        // Mock User (should be from session)
        const user = await prisma.user.findFirst({
            where: { lineId: 'mock-user-123' },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 401 })
        }

        const reservation = await prisma.reservation.create({
            data: {
                userId: user.id,
                videoId,
                scheduledTime: new Date(scheduledTime),
                status: 'pending',
            },
        })

        return NextResponse.json({ id: reservation.id })
    } catch (error) {
        console.error('Error creating reservation:', error)
        return NextResponse.json(
            { error: 'Failed to create reservation' },
            { status: 500 }
        )
    }
}
