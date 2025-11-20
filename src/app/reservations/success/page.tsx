import Link from 'next/link'
import { CheckCircle, Home } from 'lucide-react'

export default function SuccessPage() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <h1 className="text-3xl font-bold mb-4">予約が完了しました</h1>
            <p className="text-gray-400 max-w-md mb-8">
                ご予約ありがとうございます。
                当日は指定された時間の5分前までに車体付近へお越しください。
            </p>

            <Link
                href="/"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold flex items-center gap-2 transition-colors"
            >
                <Home className="w-5 h-5" />
                トップへ戻る
            </Link>
        </div>
    )
}
