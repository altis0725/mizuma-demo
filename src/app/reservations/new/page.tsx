'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Calendar, Clock, CreditCard, Loader2 } from 'lucide-react'

function ReservationForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const videoId = searchParams.get('videoId')

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!videoId || !date || !time) return

        setIsSubmitting(true)
        const scheduledTime = new Date(`${date}T${time}`)

        try {
            // 1. Create Reservation
            const res = await fetch('/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ videoId, scheduledTime }),
            })
            const reservation = await res.json()

            // 2. Mock Payment (Simulate delay)
            await new Promise(resolve => setTimeout(resolve, 1500))

            // 3. Redirect to Success
            router.push(`/reservations/success?id=${reservation.id}`)
        } catch (error) {
            console.error('Reservation failed', error)
            setIsSubmitting(false)
        }
    }

    if (!videoId) {
        return <div className="p-8 text-center">動画が選択されていません</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h1 className="text-2xl font-bold mb-6 text-center">投影予約</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">日付</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="date"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">時間</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <select
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 appearance-none"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">選択してください</option>
                                <option value="19:00">19:00</option>
                                <option value="19:15">19:15</option>
                                <option value="19:30">19:30</option>
                                <option value="19:45">19:45</option>
                                <option value="20:00">20:00</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-400">料金</span>
                            <span className="text-xl font-bold">¥5,000</span>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                hover:from-blue-500 hover:to-purple-500
                text-white rounded-xl font-bold flex items-center justify-center gap-2
                transition-all disabled:opacity-50
              "
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    処理中...
                                </>
                            ) : (
                                <>
                                    <CreditCard className="w-5 h-5" />
                                    予約して支払う
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-4">
                            ※これはデモです。実際の決済は行われません。
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default function NewReservationPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center">読み込み中...</div>}>
            <ReservationForm />
        </Suspense>
    )
}
