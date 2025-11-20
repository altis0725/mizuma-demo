'use client'

import { Check, Download, Calendar, X } from 'lucide-react'

type Plan = 'free' | 'paid'

interface PlanSelectorProps {
    onSelect: (plan: Plan) => void
}

export function PlanSelector({ onSelect }: PlanSelectorProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div
                onClick={() => onSelect('free')}
                className="group cursor-pointer relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-500 rounded-t-2xl" />
                <h3 className="text-2xl font-bold mb-2">無料体験プラン</h3>
                <div className="text-3xl font-bold mb-6">¥0</div>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-gray-300">20秒の動画生成</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-gray-300">動画ダウンロード可</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-500">
                        <div className="p-1 rounded-full bg-gray-800 text-gray-500">
                            <X className="w-4 h-4" />
                        </div>
                        <span>投影予約不可</span>
                    </li>
                </ul>

                <button className="w-full py-3 rounded-xl bg-gray-700 text-white font-bold group-hover:bg-gray-600 transition-colors">
                    無料で試す
                </button>
            </div>

            {/* Paid Plan */}
            <div
                onClick={() => onSelect('paid')}
                className="group cursor-pointer relative bg-gradient-to-b from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />
                <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                    おすすめ
                </div>

                <h3 className="text-2xl font-bold mb-2">投影プラン</h3>
                <div className="text-3xl font-bold mb-6">¥5,000</div>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-white font-bold">1分間の動画生成</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-white">動画ダウンロード可</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-white">投影予約可能</span>
                    </li>
                </ul>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-900/20">
                    選択する
                </button>
            </div>
        </div>
    )
}
