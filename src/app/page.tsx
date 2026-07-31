'use client';

import React from 'react';

export default function Home() {
  return (
    <div dir="rtl" style={{ minHeight: '100vh', backgroundColor: '#F8F9FA', color: '#1A202C', padding: '20px' }}>
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E2E8F0', padding: '20px', borderRadius: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #D4AF37, #C5A880)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '20px' }}>
            9R
          </div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1A202C' }}>9router Cloud Server Dashboard</h1>
            <p style={{ fontSize: '12px', color: '#718096' }}>سيرفر التوجيه السحابي الخاص بك (24/7 Live)</p>
          </div>
        </div>

        <div>
          <span style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0E9F6E' }}></span>
            السيرفر شغال سحابياً 100%
          </span>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>حالة السيرفر</p>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0E9F6E' }}>✅ متصل أونلاين 24/7</h3>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>قاعدة البيانات السحابية</p>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#4C51BF' }}>Supabase Cloud Active</h3>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>نماذج الذكاء الاصطناعي</p>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1A202C' }}>6 نماذج مفعلة</h3>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>منصة الاستضافة السحابية</p>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2D3748' }}>Vercel Cloud Server</h3>
          </div>
        </div>

        {/* Endpoints */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>🔗 روابط ونقاط توجيه السيرفر السحابي (Live Endpoints)</h2>
          <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>استخدم هذه النطاقات مباشرة في برامجك وأدواتك بدون التيرمنال</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: '#F7FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', justifyBetween: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#718096', display: 'block', marginBottom: '4px' }}>Base API URL:</span>
                <code style={{ fontSize: '14px', color: '#4C51BF', backgroundColor: '#EBF4FF', padding: '4px 8px', borderRadius: '6px' }}>
                  /api/v1
                </code>
              </div>
            </div>

            <div style={{ backgroundColor: '#F7FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '12px', color: '#718096', display: 'block', marginBottom: '4px' }}>Chat Completions Endpoint (OpenAI API Format):</span>
              <code style={{ fontSize: '14px', color: '#4C51BF', backgroundColor: '#EBF4FF', padding: '4px 8px', borderRadius: '6px' }}>
                /api/v1/chat/completions
              </code>
            </div>

            <div style={{ backgroundColor: '#F7FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '12px', color: '#718096', display: 'block', marginBottom: '4px' }}>Health Check Endpoint:</span>
              <a href="/api/health" target="_blank" style={{ fontSize: '14px', color: '#D4AF37', fontWeight: 'bold', textDecoration: 'none' }}>
                اختبار حالة السيرفر (/api/health) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Cloud Credentials */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>🔐 الحسابات المربوطة سحابياً</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid #C6F6D5', backgroundColor: '#F0FFF4' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#22543D' }}>GitHub Repository</strong>
              <span style={{ fontSize: '12px', color: '#4A5568' }}>mohamed7546/9router-cloud-server</span>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid #C6F6D5', backgroundColor: '#F0FFF4' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#22543D' }}>Supabase Database</strong>
              <span style={{ fontSize: '12px', color: '#4A5568' }}>jjzhvinkxjdxawqcgbhp (Active)</span>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid #C6F6D5', backgroundColor: '#F0FFF4' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#22543D' }}>Vercel Cloud Host</strong>
              <span style={{ fontSize: '12px', color: '#4A5568' }}>Account: portal81</span>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid #C6F6D5', backgroundColor: '#F0FFF4' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#22543D' }}>OpenRouter & HuggingFace</strong>
              <span style={{ fontSize: '12px', color: '#4A5568' }}>مفعل للتوجيه الذكي أونلاين</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
