import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Brain, Camera, Share2, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                기능
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
                사용법
              </Link>
              <Button asChild>
                <Link href="/idea-input">시작하기</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            창업 아이디어를 <span className="text-blue-600">데이터로 검증</span>하세요
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI와 빅데이터를 활용하여 창업 아이디어의 시장성을 분석하고, 실제 SNS 반응까지 테스트해보는 올인원
            플랫폼입니다.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/idea-input">
              무료로 분석 시작하기 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">6단계로 완성하는 창업 아이디어 검증</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>1. 아이디어 입력</CardTitle>
                <CardDescription>업종, 지역, 메뉴, 콘셉트 등 창업 아이디어의 핵심 정보를 입력합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>2. 상권 분석</CardTitle>
                <CardDescription>
                  공공데이터를 활용해 유동인구, 경쟁도 등을 분석하여 창업 적합성을 평가합니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>3. AI 이미지 생성</CardTitle>
                <CardDescription>DALL·E를 활용해 인테리어, 메뉴 등의 시각적 콘텐츠를 자동 생성합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>4. AI 홍보문구 생성</CardTitle>
                <CardDescription>ChatGPT로 업종과 콘셉트에 맞는 홍보문구와 해시태그를 생성합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>5. SNS 테스트</CardTitle>
                <CardDescription>실제 Instagram에 게시하여 좋아요, 댓글 등 실제 반응을 수집합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>6. 시장성 리포트</CardTitle>
                <CardDescription>모든 데이터를 종합하여 창업 아이디어의 시장성 리포트를 생성합니다.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">어떻게 작동하나요?</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">창업 아이디어 입력</h4>
                  <p className="text-gray-600">카페, 음식점 등 업종과 원하는 지역, 메뉴, 콘셉트를 입력합니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">데이터 기반 상권 분석</h4>
                  <p className="text-gray-600">공공데이터를 활용해 해당 지역의 유동인구, 경쟁업체 현황을 분석합니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">AI 콘텐츠 생성</h4>
                  <p className="text-gray-600">AI가 인테리어 이미지와 홍보문구를 자동으로 생성합니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">실제 SNS 반응 테스트</h4>
                  <p className="text-gray-600">생성된 콘텐츠를 Instagram에 게시하여 실제 사용자 반응을 측정합니다.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">종합 리포트 제공</h4>
                  <p className="text-gray-600">
                    모든 분석 결과를 종합하여 창업 성공 가능성을 평가한 리포트를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">지금 바로 창업 아이디어를 검증해보세요</h3>
          <p className="text-xl mb-8 opacity-90">데이터 기반의 정확한 분석으로 창업 성공률을 높이세요</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link href="/idea-input">
              무료 분석 시작하기 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-lg font-semibold">StartupAnalyzer</span>
            </div>
            <p className="text-gray-400">© 2024 StartupAnalyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
