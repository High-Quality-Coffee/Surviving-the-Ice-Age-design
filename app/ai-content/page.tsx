"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowLeft, Camera, Brain, Download, RefreshCw, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AIContentPage() {
  const router = useRouter()
  const [generating, setGenerating] = useState(false)
  const [copiedText, setCopiedText] = useState("")

  const [generatedContent, setGeneratedContent] = useState({
    images: [
      {
        id: 1,
        type: "interior",
        url: "/placeholder.svg?height=300&width=400",
        description: "북유럽 스타일 카페 인테리어",
      },
      {
        id: 2,
        type: "menu",
        url: "/placeholder.svg?height=300&width=400",
        description: "아메리카노와 샌드위치 메뉴",
      },
      {
        id: 3,
        type: "exterior",
        url: "/placeholder.svg?height=300&width=400",
        description: "카페 외관 디자인",
      },
    ],
    texts: [
      {
        id: 1,
        type: "intro",
        title: "가게 소개",
        content:
          "북유럽의 따뜻한 감성을 담은 미니멀 카페입니다. 바쁜 일상 속에서 잠시 쉬어갈 수 있는 힐링 공간을 제공합니다.",
      },
      {
        id: 2,
        type: "hashtags",
        title: "해시태그",
        content: "#북유럽카페 #미니멀인테리어 #힐링카페 #아메리카노맛집 #직장인카페 #모던카페 #감성카페 #조용한카페",
      },
      {
        id: 3,
        type: "ad",
        title: "광고 문구",
        content:
          "🌿 북유럽 감성 가득한 힐링 카페\n☕ 엄선된 원두로 내린 진짜 아메리카노\n🥪 신선한 재료의 수제 샌드위치\n📍 지하철역 도보 2분, 접근성 최고!",
      },
    ],
  })

  const handleGenerate = async (type: "image" | "text") => {
    setGenerating(true)
    // API 호출 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setGenerating(false)
  }

  const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedText(id.toString())
    setTimeout(() => setCopiedText(""), 2000)
  }

  const handleNext = () => {
    router.push("/sns-test")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>아이디어 입력</span>
              <span className="text-gray-300">→</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">✓</span>
              <span>상권 분석</span>
              <span className="text-gray-300">→</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded">3</span>
              <span>AI 콘텐츠</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">SNS 테스트</span>
              <span className="text-gray-300">→</span>
              <span className="text-gray-400">리포트</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI 콘텐츠 생성 결과</h2>
            <p className="text-gray-600">입력하신 창업 아이디어를 바탕으로 AI가 생성한 이미지와 홍보 문구입니다.</p>
          </div>

          <Tabs defaultValue="images" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="images" className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>AI 이미지</span>
              </TabsTrigger>
              <TabsTrigger value="texts" className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>홍보 문구</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="images" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">생성된 이미지</h3>
                <Button variant="outline" onClick={() => handleGenerate("image")} disabled={generating}>
                  {generating ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="mr-2 h-4 w-4" />
                  )}
                  다시 생성
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {generatedContent.images.map((image) => (
                  <Card key={image.id} className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.description}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {image.type === "interior" ? "인테리어" : image.type === "menu" ? "메뉴" : "외관"}
                          </Badge>
                          <p className="text-sm text-gray-600">{image.description}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="texts" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">생성된 홍보 문구</h3>
                <Button variant="outline" onClick={() => handleGenerate("text")} disabled={generating}>
                  {generating ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="mr-2 h-4 w-4" />
                  )}
                  다시 생성
                </Button>
              </div>

              <div className="grid gap-6">
                {generatedContent.texts.map((text) => (
                  <Card key={text.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{text.title}</CardTitle>
                        <Button size="sm" variant="outline" onClick={() => handleCopy(text.content, text.id)}>
                          {copiedText === text.id.toString() ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="whitespace-pre-line text-gray-800">{text.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>다음 단계: SNS 반응 테스트</CardTitle>
              <CardDescription>생성된 콘텐츠를 실제 Instagram에 게시하여 사용자 반응을 측정합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">테스트 진행 방식</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 생성된 이미지와 문구를 조합하여 Instagram 게시물 작성</li>
                  <li>• 24시간 동안 좋아요, 댓글, 저장 등의 반응 수집</li>
                  <li>• 인게이지먼트 분석을 통한 시장 반응 평가</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/analysis">
                <ArrowLeft className="mr-2 h-4 w-4" />
                이전
              </Link>
            </Button>
            <Button onClick={handleNext} className="px-8">
              SNS 테스트 시작
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
