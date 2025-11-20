import Link from 'next/link'
import { Train, User } from 'lucide-react'

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Train className="w-6 h-6 text-blue-400" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Mizuma Projection
                    </span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link href="/templates" className="text-sm text-gray-300 hover:text-white transition-colors">
                        動画作成
                    </Link>
                    <Link href="/reservations" className="text-sm text-gray-300 hover:text-white transition-colors">
                        予約
                    </Link>
                    <Link href="/mypage" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <User className="w-5 h-5" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}
