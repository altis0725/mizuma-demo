import { Sparkles, Video, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Mizuma Projection System
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    あなたの思い出を、水間の夜空に映し出す。<br />
                    特別な瞬間を、幻想的なプロジェクションマッピングで彩りましょう。
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">簡単作成</h3>
                    <p className="text-gray-400">
                        テンプレートを選んで写真やテキストを入れるだけ。
                        プロフェッショナルな映像が数分で完成します。
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                        <Video className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">高品質な映像</h3>
                    <p className="text-gray-400">
                        最新のAI技術とプロが作成したエフェクトで、
                        感動的な映像体験を提供します。
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                        <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">スムーズな予約</h3>
                    <p className="text-gray-400">
                        作成した動画はそのまま投影予約へ。
                        特別な日のサプライズに最適です。
                    </p>
                </div>
            </div>

            {/* How it works */}
            <div className="max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">ご利用の流れ</h2>
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-8 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                            1
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">テンプレートを選択</h3>
                            <p className="text-gray-400">
                                シチュエーションに合わせたテンプレートを選びます。
                                誕生日、記念日、プロポーズなど、様々なシーンに対応しています。
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-8 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                            2
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">動画をカスタマイズ</h3>
                            <p className="text-gray-400">
                                写真をアップロードし、メッセージを入力します。
                                プレビューで確認しながら、納得いくまで調整できます。
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-8 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                            3
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">予約・決済</h3>
                            <p className="text-gray-400">
                                投影したい日時を選択し、予約を完了します。
                                当日は指定の時間に会場へお越しください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-900/20"
                >
                    <Zap className="w-5 h-5" />
                    今すぐ始める
                </Link>
            </div>
        </div>
    )
}
