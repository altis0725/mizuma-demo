import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        // Mock User (should be from session)
        const user = await prisma.user.findFirst({
            where: { lineId: 'mock-user-123' },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 401 })
        }

        // Verify ownership
        const reservation = await prisma.reservation.findUnique({
            where: { id },
        })

        if (!reservation) {
            return NextResponse.json({ error: 'Reservation not found' }, { status: 404 })
        }

        if (reservation.userId !== user.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        await prisma.reservation.delete({
            where: { id },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error cancelling reservation:', error)
        return NextResponse.json(
            { error: 'Failed to cancel reservation' },
            { status: 500 }
        )
    }
}
