"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, FileText, Download, Share2, BarChart3, TrendingUp, Users, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const reportData = {
    overallScore: 82,
    marketScore: 85,
    competitionScore: 72,
    snsScore: 88,
    recommendation: "추천",
    summary: "선택하신 창업 아이디어는 높은 시장성과 우수한 SNS 반응을 보여 성공 가능성이 높습니다.",
  }

  const handleDownload = () => {
    // PDF 다운로드 로직
    console.log("Downloading PDF report...")
  }

  const handleShare = () => {
    // 리포트 공유 로직
    console.log("Sharing report...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>아이디어 입력</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>상권 분석</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>AI 콘텐츠</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>SNS 테스트</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>리포트</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">시장성 분석 리포트</h2>
            <p className="text-gray-600">모든 분석 결과를 종합한 창업 아이디어의 최종 평가입니다.</p>
            <div className="flex justify-center space-x-4 mt-6">
              <Button onClick={handleDownload} className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>PDF 다운로드</span>
              </Button>
              <Button variant="outline" onClick={handleShare} className="flex items-center space-x-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                <span>공유하기</span>
              </Button>
            </div>
          </div>

          {/* 종합 점수 */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">종합 시장성 점수</CardTitle>
              <CardDescription>모든 분석 요소를 종합한 최종 점수입니다.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - reportData.overallScore / 100)}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{reportData.overallScore}</span>
                </div>
              </div>

              <Badge
                variant="secondary"
                className={`text-lg px-4 py-2 ${
                  reportData.overallScore >= 80
                    ? "bg-green-100 text-green-800"
                    : reportData.overallScore >= 60
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {reportData.recommendation}
              </Badge>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{reportData.summary}</p>
            </CardContent>
          </Card>

          {/* 세부 점수 */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <span>상권 분석</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{reportData.marketScore}점</div>
                <Progress value={reportData.marketScore} className="mb-3" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 유동인구: 45,230명 (높음)</li>
                  <li>• 접근성: 우수</li>
                  <li>• 주변 환경: 양호</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span>경쟁 분석</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{reportData.competitionScore}점</div>
                <Progress value={reportData.competitionScore} className="mb-3" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 경쟁 강도: 보통</li>
                  <li>• 차별화 가능성: 높음</li>
                  <li>• 시장 포화도: 중간</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <span>SNS 반응</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{reportData.snsScore}점</div>
                <Progress value={reportData.snsScore} className="mb-3" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 인게이지먼트: 15.6%</li>
                  <li>• 좋아요: 127개</li>
                  <li>• 저장률: 3.6%</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 상세 분석 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>강점 분석</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">높은 유동인구</h4>
                      <p className="text-sm text-gray-600">일평균 45,230명의 안정적인 고객층 확보 가능</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">우수한 SNS 반응</h4>
                      <p className="text-sm text-gray-600">인게이지먼트율 15.6%로 높은 관심도 확인</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">차별화된 콘셉트</h4>
                      <p className="text-sm text-gray-600">북유럽 스타일의 독특한 브랜딩으로 경쟁 우위</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span>개선 제안</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">경쟁업체 차별화</h4>
                      <p className="text-sm text-gray-600">주변 카페와의 명확한 차별점 강화 필요</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">마케팅 전략</h4>
                      <p className="text-sm text-gray-600">SNS 마케팅을 활용한 지속적인 브랜드 노출</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">운영 효율성</h4>
                      <p className="text-sm text-gray-600">직장인 타겟을 위한 빠른 서비스 시스템 구축</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 최종 결론 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>최종 결론 및 권장사항</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-green-900 text-lg mb-3">창업 추천</h4>
                <p className="text-green-800 mb-4">
                  종합 분석 결과, 귀하의 창업 아이디어는 <strong>82점</strong>의 높은 점수를 기록했습니다. 특히 상권
                  분석과 SNS 반응에서 우수한 결과를 보여 성공 가능성이 높습니다.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">핵심 성공 요인</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ 높은 유동인구와 우수한 접근성</li>
                    <li>✓ 차별화된 북유럽 콘셉트</li>
                    <li>✓ 강한 SNS 마케팅 잠재력</li>
                    <li>✓ 직장인 타겟층의 명확한 니즈</li>
                  </ul>
                </div>
                <p className="text-green-800 text-sm">
                  제안된 개선사항을 반영하여 창업을 진행하시면 성공 확률을 더욱 높일 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/sns-test">
                <ArrowLeft className="mr-2 h-4 w-4" />
                이전
              </Link>
            </Button>
            <Button asChild className="px-8">
              <Link href="/">새로운 분석 시작</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
