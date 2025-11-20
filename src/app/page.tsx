'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="block text-white mb-2">あなたの想いを</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            電車というキャンバスへ
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
          水間鉄道の車体に、あなただけの特別な動画を投影しませんか？
          テンプレートを選んで組み合わせるだけで、感動的な空間を演出します。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/templates"
            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all hover:scale-105"
          >
            <Play className="w-5 h-5 fill-current" />
            動画を作る
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
          >
            詳しく見る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* Floating Cards Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 pointer-events-none opacity-50"
      >
        <div className="w-64 h-40 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm transform -rotate-6" />
        <div className="w-64 h-40 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm transform rotate-6" />
      </motion.div>
    </div>
  )
}
