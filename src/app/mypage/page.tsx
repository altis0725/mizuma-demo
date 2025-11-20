'use client'

import { useState, useEffect } from 'react'
import { Calendar, Video, Trash2, Download, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface Reservation {
    id: string
    scheduledTime: string
    status: string
    video: {
        id: string
        status: string
        downloadUrl: string | null
    }
}

interface VideoItem {
    id: string
    status: string
    downloadUrl: string | null
    createdAt: string
}

export default function MyPage() {
    const [activeTab, setActiveTab] = useState<'reservations' | 'videos'>('reservations')
    const [reservations, setReservations] = useState<Reservation[]>([])
    const [videos, setVideos] = useState<VideoItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const [resData, vidData] = await Promise.all([
                fetch('/api/reservations/my').then(r => r.json()),
                fetch('/api/videos/my').then(r => r.json())
            ])
            setReservations(resData)
            setVideos(vidData)
        } catch (error) {
            console.error('Failed to fetch data', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCancelReservation = async (id: string) => {
        if (!confirm('本当に予約をキャンセルしますか？')) return

        try {
            const res = await fetch(`/api/reservations/${id}`, {
                method: 'DELETE',
            })
            if (res.ok) {
                setReservations(reservations.filter(r => r.id !== id))
            } else {
                alert('キャンセルに失敗しました')
            }
        } catch (error) {
            console.error('Failed to cancel', error)
            alert('エラーが発生しました')
        }
    }

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">マイページ</h1>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-white/5 p-1 rounded-xl flex gap-2">
                    <button
                        onClick={() => setActiveTab('reservations')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'reservations'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            予約履歴
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('videos')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'videos'
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            動画一覧
                        </div>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
                {activeTab === 'reservations' ? (
                    <div className="space-y-4">
                        {reservations.length === 0 ? (
                            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                                <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400">予約履歴はありません</p>
                                <Link href="/" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
                                    予約を作成する &rarr;
                                </Link>
                            </div>
                        ) : (
                            reservations.map(reservation => (
                                <div key={reservation.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">
                                                {new Date(reservation.scheduledTime).toLocaleDateString('ja-JP')}
                                            </div>
                                            <div className="text-2xl font-bold text-white">
                                                {new Date(reservation.scheduledTime).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className={`px-3 py-1 rounded-full text-sm ${reservation.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                                                reservation.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {reservation.status === 'confirmed' ? '予約確定' :
                                                reservation.status === 'pending' ? '承認待ち' : 'キャンセル済'}
                                        </div>

                                        <button
                                            onClick={() => handleCancelReservation(reservation.id)}
                                            className="p-2 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                                            title="キャンセル"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videos.length === 0 ? (
                            <div className="col-span-2 text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                                <Video className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400">作成した動画はありません</p>
                                <Link href="/" className="inline-block mt-4 text-purple-400 hover:text-purple-300">
                                    動画を作成する &rarr;
                                </Link>
                            </div>
                        ) : (
                            videos.map(video => (
                                <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group">
                                    <div className="aspect-video bg-black/50 relative flex items-center justify-center">
                                        {video.status === 'completed' ? (
                                            <Video className="w-12 h-12 text-gray-600 group-hover:text-purple-500 transition-colors" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-gray-500">
                                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-current"></div>
                                                <span className="text-xs">生成中...</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="text-sm text-gray-400">作成日</div>
                                                <div className="font-medium">
                                                    {new Date(video.createdAt).toLocaleDateString('ja-JP')}
                                                </div>
                                            </div>
                                            <div className={`px-2 py-1 rounded text-xs ${video.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                                    video.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                                                        'bg-blue-500/20 text-blue-400'
                                                }`}>
                                                {video.status === 'completed' ? '完了' :
                                                    video.status === 'failed' ? '失敗' : '生成中'}
                                            </div>
                                        </div>

                                        {video.downloadUrl && (
                                            <a
                                                href={video.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-2 bg-white/10 hover:bg-white/20 text-center rounded-lg transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                ダウンロード
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
