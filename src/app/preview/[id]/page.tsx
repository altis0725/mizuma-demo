import Link from 'next/link'
import prisma from '@/lib/prisma'
import { Calendar, Download, Share2 } from 'lucide-react'

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const video = await prisma.video.findUnique({
        where: { id },
    })

    if (!video) {
        return <div>Video not found</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <span className="text-gradient">動画プレビュー</span>
                </h1>

                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-8 border border-white/10 relative group">
                    {/* Mock Video Player */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-500">動画プレーヤー (Mock)</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* Controls */}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={video.downloadUrl || '#'}
                        className="
                px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold
                flex items-center justify-center gap-2 transition-all
              "
                    >
                        <Download className="w-5 h-5" />
                        動画をダウンロード
                    </a>

                    {video.plan === 'paid' ? (
                        <Link
                            href={`/reservations/new?videoId=${id}`}
                            className="
                  px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold
                  flex items-center justify-center gap-2 transition-all
                  shadow-[0_0_20px_rgba(59,130,246,0.5)]
                "
                        >
                            <Calendar className="w-5 h-5" />
                            投影を予約する
                        </Link>
                    ) : (
                        <div className="px-8 py-3 bg-gray-800/50 text-gray-500 rounded-full font-bold flex items-center justify-center gap-2 cursor-not-allowed border border-gray-700">
                            <Calendar className="w-5 h-5" />
                            予約は有料プランのみ
                        </div>
                    )}
                </div>

                <div className="flex gap-4 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
                        <Share2 className="w-5 h-5" />
                        共有
                    </button>
                </div>
            </div>
        </div>
    )
}
