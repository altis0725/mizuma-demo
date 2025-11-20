import { Users, Video, Calendar, DollarSign } from 'lucide-react'

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">ダッシュボード</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-gray-400">総予約数</div>
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                            <Calendar className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold">128</div>
                    <div className="text-sm text-green-400 mt-2">+12% 先月比</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-gray-400">生成動画数</div>
                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                            <Video className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold">342</div>
                    <div className="text-sm text-green-400 mt-2">+24% 先月比</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-gray-400">総ユーザー数</div>
                        <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                            <Users className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold">1,204</div>
                    <div className="text-sm text-green-400 mt-2">+8% 先月比</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-gray-400">売上</div>
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                            <DollarSign className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold">¥450,000</div>
                    <div className="text-sm text-green-400 mt-2">+15% 先月比</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">最近の予約</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold">ユーザー {i}</div>
                                        <div className="text-sm text-gray-400">2024/04/2{i} 19:00</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                                    承認待ち
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">システムステータス</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">動画生成サーバー</span>
                            <span className="flex items-center gap-2 text-green-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                稼働中
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">プロジェクション機器</span>
                            <span className="flex items-center gap-2 text-green-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                正常
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">データベース</span>
                            <span className="flex items-center gap-2 text-green-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                接続良好
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
