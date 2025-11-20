'use client'

import { useState } from 'react'
import { PlanSelector } from '@/components/PlanSelector'
import { TemplateWizard } from '@/components/TemplateWizard'

type Template = {
    id: string
    category: number
    title: string
    videoUrl: string
    thumbnail: string
}

type Plan = 'free' | 'paid'

export function TemplatesClient({ templates }: { templates: Template[] }) {
    const [plan, setPlan] = useState<Plan | null>(null)

    if (!plan) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <span className="text-gradient">プラン選択</span>
                </h1>
                <PlanSelector onSelect={setPlan} />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                <span className="text-gradient">動画テンプレート選択</span>
                <span className="ml-4 text-sm text-gray-400 font-normal">
                    {plan === 'free' ? '無料体験プラン (20秒)' : '投影プラン (1分)'}
                </span>
            </h1>
            <TemplateWizard templates={templates} plan={plan} />
        </div>
    )
}
