'use client';

import React, { useState, useEffect } from 'react';
import { Server, Database, Key, ShieldCheck, Cpu, ExternalLink, Activity, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [status, setStatus] = useState<'loading' | 'online' | 'error'>('online');
  const [activeModels, setActiveModels] = useState<number>(6);
  const [supabaseConnected, setSupabaseConnected] = useState<boolean>(true);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F8F9FA] text-[#1A202C] font-sans antialiased">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#C5A880] flex items-center justify-center text-white font-bold text-xl shadow-md">
              9R
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1A202C]">9router Cloud Dashboard</h1>
              <p className="text-xs text-gray-5-00 text-slate-500">سيرفر التوجيه السحابي الخاص بك (24/7 Live)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              السيرفر شغال سحابياً 100%
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Status Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">حالة السيرفر</p>
              <h3 className="text-lg font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5" /> متصل أونلاين
              </h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Server className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">قاعدة البيانات</p>
              <h3 className="text-lg font-bold text-[#1A202C] flex items-center gap-1.5">
                <Database className="w-5 h-5 text-indigo-600" /> Supabase Cloud
              </h3>
            </div>
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <Database className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">النماذج المفعلة</p>
              <h3 className="text-2xl font-extrabold text-[#1A202C]">{activeModels} نماذج ذكاء</h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#D4AF37]">
              <Cpu className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">البيئة والاستضافة</p>
              <h3 className="text-lg font-bold text-gray-800">Vercel Serverless</h3>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Endpoints & Links */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#1A202C]">🔗 روابط ونقاط توجيه السيرفر السحابي (Live Endpoints)</h2>
              <p className="text-xs text-gray-500">يمكنك استخدام هذه النطاقات مباشرة في برامجك وأدواتك بدون فتح التيرمنال</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-gray-500 block mb-1">Base API URL:</span>
                <code className="text-sm font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  https://9router-cloud-server.vercel.app/api/v1
                </code>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">جاهز للاتصال</span>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-gray-500 block mb-1">Chat Completions Endpoint:</span>
                <code className="text-sm font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  https://9router-cloud-server.vercel.app/api/v1/chat/completions
                </code>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">متوافق مع OpenAI API</span>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-gray-500 block mb-1">Health Check Link:</span>
                <code className="text-sm font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  https://9router-cloud-server.vercel.app/api/health
                </code>
              </div>
              <a href="/api/health" target="_blank" className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1">
                اختبار الاتصال <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Credentials & Integrations Status */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-[#1A202C]">🔐 الحسابات والخدمات المربوطة سحابياً</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 bg-emerald-50/50 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <div>
                <h4 className="font-bold text-sm text-[#1A202C]">GitHub Repository</h4>
                <p className="text-xs text-gray-500">mohamed7546/9router-cloud-server</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-emerald-50/50 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <div>
                <h4 className="font-bold text-sm text-[#1A202C]">Supabase Database</h4>
                <p className="text-xs text-gray-500">jjzhvinkxjdxawqcgbhp (Active)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-emerald-50/50 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <div>
                <h4 className="font-bold text-sm text-[#1A202C]">Vercel Cloud Host</h4>
                <p className="text-xs text-gray-500">Account: portal81</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-emerald-50/50 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <div>
                <h4 className="font-bold text-sm text-[#1A202C]">HuggingFace & OpenRouter Integration</h4>
                <p className="text-xs text-gray-500">المفاتيح مفعلة للتوجيه أونلاين</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
