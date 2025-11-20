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

        const reservations = await prisma.reservation.findMany({
            where: { userId: user.id },
            include: {
                video: true,
            },
            orderBy: { scheduledTime: 'desc' },
        })

        return NextResponse.json(reservations)
    } catch (error) {
        console.error('Error fetching reservations:', error)
        return NextResponse.json(
            { error: 'Failed to fetch reservations' },
            { status: 500 }
        )
    }
}
