'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react'

export default function OptionsPage() {
    const [templates, setTemplates] = useState([
        { id: 1, title: 'バースデーサプライズ', category: '誕生日', price: '無料' },
        { id: 2, title: 'プロポーズ大作戦', category: '記念日', price: '¥5,000' },
        { id: 3, title: '感謝のメッセージ', category: 'その他', price: '無料' },
    ])

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">オプション管理（テンプレート）</h1>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    新規追加
                </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400">
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">タイトル</th>
                            <th className="p-4">カテゴリー</th>
                            <th className="p-4">価格</th>
                            <th className="p-4 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {templates.map((template) => (
                            <tr key={template.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-gray-400">#{template.id}</td>
                                <td className="p-4 font-medium flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <ImageIcon className="w-5 h-5 text-gray-500" />
                                    </div>
                                    {template.title}
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-gray-700 rounded text-sm">
                                        {template.category}
                                    </span>
                                </td>
                                <td className="p-4">{template.price}</td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 rounded-lg transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
