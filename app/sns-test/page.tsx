"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Share2, Heart, MessageCircle, Bookmark, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SNSTestPage() {
  const router = useRouter()
  const [testPhase, setTestPhase] = useState<"uploading" | "monitoring" | "completed">("uploading")
  const [progress, setProgress] = useState(0)

  const [snsData, setSnsData] = useState({
    postId: "p_12345",
    likes: 0,
    comments: 0,
    saves: 0,
    views: 0,
    engagementRate: 0,
  })

  useEffect(() => {
    if (testPhase === "uploading") {
      const timer = setTimeout(() => {
        setTestPhase("monitoring")
        setProgress(25)
      }, 3000)
      return () => clearTimeout(timer)
    }

    if (testPhase === "monitoring") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 10
          if (newProgress >= 100) {
            setTestPhase("completed")
            setSnsData({
              postId: "p_12345",
              likes: 127,
              comments: 23,
              saves: 45,
              views: 1250,
              engagementRate: 15.6,
            })
            return 100
          }

          // 실시간 데이터 업데이트 시뮬레이션
          setSnsData((prev) => ({
            ...prev,
            likes: Math.floor(newProgress * 1.3),
            comments: Math.floor(newProgress * 0.25),
            saves: Math.floor(newProgress * 0.5),
            views: Math.floor(newProgress * 12),
            engagementRate: Math.min(newProgress * 0.16, 15.6),
          }))

          return newProgress
        })
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [testPhase])

  const handleNext = () => {
    router.push("/report")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Share2 className="h-8 w-8 text-blue-600" />
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
              <span className="bg-blue-600 text-white px-2 py-1 rounded">4</span>
              <span>SNS 테스트</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">리포트</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SNS 반응 테스트</h2>
            <p className="text-gray-600">생성된 콘텐츠를 Instagram에 게시하여 실제 사용자 반응을 측정하고 있습니다.</p>
          </div>

          {/* 테스트 상태 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-blue-600" />
                <span>테스트 진행 상황</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {testPhase === "uploading" && "콘텐츠 업로드 중..."}
                    {testPhase === "monitoring" && "반응 수집 중..."}
                    {testPhase === "completed" && "테스트 완료!"}
                  </span>
                  <Badge variant={testPhase === "completed" ? "default" : "secondary"}>
                    {testPhase === "uploading" && "업로드"}
                    {testPhase === "monitoring" && "모니터링"}
                    {testPhase === "completed" && "완료"}
                  </Badge>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="text-xs text-gray-500 text-center">
                  {testPhase === "uploading" && "Instagram에 게시물을 업로드하고 있습니다..."}
                  {testPhase === "monitoring" && "24시간 동안 사용자 반응을 수집합니다..."}
                  {testPhase === "completed" && "모든 데이터 수집이 완료되었습니다!"}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 게시물 미리보기 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>게시된 콘텐츠</CardTitle>
                <CardDescription>Instagram에 업로드된 게시물입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg border p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">startup_test_cafe</p>
                      <p className="text-xs text-gray-500">테스트 계정</p>
                    </div>
                  </div>

                  <div className="aspect-square relative mb-3 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="테스트 게시물"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Heart className="h-5 w-5" />
                      <MessageCircle className="h-5 w-5" />
                      <Share2 className="h-5 w-5" />
                      <Bookmark className="h-5 w-5 ml-auto" />
                    </div>
                    <p className="text-sm">
                      <span className="font-semibold">startup_test_cafe</span> 북유럽의 따뜻한 감성을 담은 미니멀
                      카페입니다. 바쁜 일상 속에서 잠시 쉬어갈 수 있는 힐링 공간을 제공합니다.
                    </p>
                    <p className="text-sm text-blue-600">#북유럽카페 #미니멀인테리어 #힐링카페 #아메리카노맛집</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 실시간 반응 데이터 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>실시간 반응</span>
                </CardTitle>
                <CardDescription>게시물에 대한 실시간 인게이지먼트 데이터입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{snsData.likes}</div>
                    <div className="text-sm text-gray-600">좋아요</div>
                  </div>

                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{snsData.comments}</div>
                    <div className="text-sm text-gray-600">댓글</div>
                  </div>

                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <Bookmark className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{snsData.saves}</div>
                    <div className="text-sm text-gray-600">저장</div>
                  </div>

                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Eye className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{snsData.views}</div>
                    <div className="text-sm text-gray-600">조회수</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{snsData.engagementRate.toFixed(1)}%</div>
                    <div className="text-sm text-gray-600">인게이지먼트율</div>
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                      {snsData.engagementRate > 10 ? "높음" : snsData.engagementRate > 5 ? "보통" : "낮음"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {testPhase === "completed" && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>반응 분석 요약</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">긍정적인 반응!</h4>
                  <p className="text-green-800 mb-3">
                    인게이지먼트율 15.6%로 업계 평균(8-12%)을 상회하는 우수한 결과를 보였습니다. 특히 저장 수가 높아
                    콘텐츠에 대한 관심도가 높음을 의미합니다.
                  </p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• 좋아요/조회수 비율: 10.2% (평균 대비 높음)</li>
                    <li>• 댓글 참여도: 1.8% (활발한 소통)</li>
                    <li>• 저장률: 3.6% (높은 관심도)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/ai-content">
                <ArrowLeft className="mr-2 h-4 w-4" />
                이전
              </Link>
            </Button>
            <Button onClick={handleNext} className="px-8" disabled={testPhase !== "completed"}>
              최종 리포트 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
