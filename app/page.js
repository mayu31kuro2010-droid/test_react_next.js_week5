"use client";

import Image from "next/image";
import Counter from "./Counter";
import Link from "next/link";

export default function Home() {
    const postIds =[1, 2, 3];
    
    return (
        /* 修正点: 外枠のdivタグに対して、画面全体の真ん中へ広げる強力なスタイルを直接指定しました */
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            padding: '40px 20px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%), #0a0a0a'
        }}>
            {/* メインエリアの中央配置指定 */}
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                width: '100%',
                maxWidth: '600px'
            }}>
                
                {/* 1. 一番上の中央に白いNext.jsロゴを配置 */}
                <Image 
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                  style={{ filter: 'invert(1)' }} 
                />

                {/* 2. 記事一覧 */}
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>記事一覧</h1>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {postIds.map((id) => (
                            <li key={id} style={{ margin: '8px 0' }}>
                                <Link href={`/post/${id}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>
                                    記事 {id} を読む
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            
                {/* 3. Aboutリンク */}
                <div>
                    <Link href="/about" style={{ color: '#38bdf8', textDecoration: 'none' }}>
                        Aboutページへ移動
                    </Link>
                </div>
                
                {/* 4. カウンター */}
                <Counter />
                
                {/* 5. 説明テキスト */}
                <ol style={{ paddingLeft: '20px', textAlign: 'left', margin: '0', color: '#ccc' }}>
                    <li>
                        Get started by editing <code>app/page.js</code>
                    </li>
                    <li>Save and see your changes instantly.</li>
                    <li>こんにちは</li>
                </ol>
                  
                {/* 6. 下部のボタンエリア */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexDirection: 'row' }}>
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#ffffff',
                          color: '#0a0a0a',
                          gap: '8px',
                          fontSize: '15px',
                          height: '44px',
                          padding: '0 20px',
                          fontWeight: '600',
                          textDecoration: 'none'
                      }}
                    >
                        <Image
                          src="/vercel.svg"
                          alt="Vercel logomark"
                          width={16}
                          height={16}
                        />
                        Deploy
                    </a>
                    <a
                      href="https://nextjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                          borderRadius: '9999px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '15px',
                          height: '44px',
                          padding: '0 20px',
                          color: '#ffffff',
                          textDecoration: 'none'
                      }}
                    >
                        Read our documentation
                    </a>
                </div>
            </main>
        </div>
    );
}