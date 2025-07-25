"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, BarChart3, Users, TrendingUp, MapPin, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AnalysisPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [analysisData, setAnalysisData] = useState({
    population: 45230,
    competitionScore: 72,
    prospectScore: 85,
    summary: "선택하신 지역은 유동인구가 많고 접근성이 좋아 카페 창업에 적합한 지역입니다.",
  })

  useEffect(() => {
    // API 호출 시뮬레이션
    const fetchAnalysis = async () => {
      setLoading(true)
      // 실제로는 GET /analysis/region/{regionCode} API 호출
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setLoading(false)
    }

    fetchAnalysis()
  }, [])

  const handleNext = () => {
    router.push("/ai-content")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
              </Link>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
                <span>아이디어 입력</span>
                <span className="text-gray-300">→</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">2</span>
                <span>상권 분석</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">AI 콘텐츠</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">SNS 테스트</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">리포트</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">상권 데이터를 분석하고 있습니다</h2>
              <p className="text-gray-600 mb-8">공공데이터를 활용하여 유동인구, 경쟁도 등을 분석 중입니다...</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>유동인구 데이터 수집</span>
                    <span className="text-green-600">완료</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>경쟁업체 현황 분석</span>
                    <span className="text-blue-600">진행중...</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>시장 전망 평가</span>
                    <span>대기중</span>
                  </div>
                  <Progress value={65} className="mt-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>아이디어 입력</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>상권 분석</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">AI 콘텐츠</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">SNS 테스트</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">리포트</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">상권 분석 결과</h2>
            <p className="text-gray-600">선택하신 지역의 상권 데이터를 분석한 결과입니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>유동인구</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {analysisData.population.toLocaleString()}명
                </div>
                <p className="text-sm text-gray-600">일평균 유동인구</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                  높음
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <span>경쟁도</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{analysisData.competitionScore}점</div>
                <p className="text-sm text-gray-600">100점 만점</p>
                <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-800">
                  보통
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>유망도</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{analysisData.prospectScore}점</div>
                <p className="text-sm text-gray-600">100점 만점</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                  높음
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>상권 분석 요약</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">분석 결과</h4>
                    <p className="text-blue-800">{analysisData.summary}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">긍정 요인</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>높은 유동인구 (일평균 45,230명)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>대중교통 접근성 우수</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>주변 오피스 밀집도 높음</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">주의 요인</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>동종업계 경쟁업체 다수 존재</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>임대료 상승 추세</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>주말 유동인구 감소</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/idea-input">
                <ArrowLeft className="mr-2 h-4 w-4" />
                이전
              </Link>
            </Button>
            <Button onClick={handleNext} className="px-8">
              AI 콘텐츠 생성
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
