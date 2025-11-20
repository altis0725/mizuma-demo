'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Template = {
    id: string
    category: number
    title: string
    videoUrl: string
    thumbnail: string
}

type Plan = 'free' | 'paid'

export function TemplateWizard({ templates, plan }: { templates: Template[], plan: Plan }) {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [selectedTemplates, setSelectedTemplates] = useState<string[]>([])
    const [isGenerating, setIsGenerating] = useState(false)

    // Free plan: 2 steps (Category 1 & 2), Paid plan: 3 steps (Category 1, 2 & 3)
    const maxSteps = plan === 'free' ? 2 : 3
    const currentTemplates = templates.filter((t) => t.category === step)

    const handleSelect = (id: string) => {
        const newSelected = [...selectedTemplates]
        newSelected[step - 1] = id
        setSelectedTemplates(newSelected)
    }

    const handleNext = async () => {
        if (step < maxSteps) {
            setStep(step + 1)
        } else {
            // Finish selection, generate video (mock)
            setIsGenerating(true)
            try {
                // Filter out undefined values just in case
                const validTemplateIds = selectedTemplates.filter(Boolean)

                const res = await fetch('/api/videos/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        templateIds: validTemplateIds,
                        plan
                    }),
                })

                if (!res.ok) {
                    throw new Error('Generation failed')
                }

                const data = await res.json()
                router.push(`/preview/${data.id}`)
            } catch (error) {
                console.error('Failed to generate video', error)
                setIsGenerating(false)
                alert('動画の生成に失敗しました。もう一度お試しください。')
            }
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">ステップ {step} / {maxSteps}</h2>
                    <span className="text-gray-400">
                        {step === 1 ? 'オープニング' : step === 2 ? 'メイン' : 'エンディング'}
                        を選んでください
                    </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${(step / maxSteps) * 100}%` }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {currentTemplates.map((template) => (
                        <div
                            key={template.id}
                            onClick={() => handleSelect(template.id)}
                            className={`
                relative group cursor-pointer rounded-xl overflow-hidden border-2 transition-all
                ${selectedTemplates[step - 1] === template.id
                                    ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                                    : 'border-transparent hover:border-white/20'
                                }
              `}
                        >
                            <div className="aspect-video bg-gray-800 relative">
                                {/* Placeholder for video thumbnail */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    {template.title}
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-900">
                                <h3 className="font-bold text-white">{template.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-end">
                <button
                    onClick={handleNext}
                    disabled={!selectedTemplates[step - 1] || isGenerating}
                    className="
            px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-500
            text-white rounded-full font-bold flex items-center gap-2 transition-all
          "
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            生成中...
                        </>
                    ) : (
                        <>
                            {step === maxSteps ? '動画を生成する' : '次へ'}
                            <ChevronRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}
