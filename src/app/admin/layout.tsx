import Link from 'next/link'
import { LayoutDashboard, Settings, Users, Video, Calendar } from 'lucide-react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 p-6 flex flex-col">
                <div className="text-xl font-bold mb-8 px-4">
                    Mizuma Admin
                </div>

                <nav className="space-y-2 flex-1">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        ダッシュボード
                    </Link>
                    <Link
                        href="/admin/reservations"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <Calendar className="w-5 h-5" />
                        予約管理
                    </Link>
                    <Link
                        href="/admin/videos"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <Video className="w-5 h-5" />
                        動画管理
                    </Link>
                    <Link
                        href="/admin/options"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        オプション管理
                    </Link>
                </nav>

                <div className="pt-6 border-t border-white/10">
                    <Link href="/" className="text-sm text-gray-500 hover:text-white px-4">
                        &larr; サイトに戻る
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
