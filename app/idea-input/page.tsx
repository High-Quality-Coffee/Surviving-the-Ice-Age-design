"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function IdeaInputPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    industry: "",
    region: "",
    menu: "",
    concept: "",
    keywords: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // API 호출 시뮬레이션
    console.log("Submitting idea:", formData)

    // 실제로는 POST /idea/submit API 호출
    // const response = await fetch('/api/idea/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    // 성공 시 다음 단계로 이동
    router.push("/analysis")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">StartupAnalyzer</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span className="bg-blue-600 text-white px-2 py-1 rounded">1</span>
                <span>아이디어 입력</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">상권 분석</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">AI 콘텐츠</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">SNS 테스트</span>
                <span className="text-gray-300">→</span>
                <span className="text-gray-400">리포트</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">창업 아이디어를 입력해주세요</h2>
            <p className="text-gray-600">입력하신 정보를 바탕으로 상권 분석과 AI 콘텐츠 생성을 진행합니다.</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <span>창업 아이디어 정보</span>
              </CardTitle>
              <CardDescription>모든 항목을 정확히 입력해주시면 더 정확한 분석 결과를 받을 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">업종 *</Label>
                  <Select onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="업종을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cafe">카페</SelectItem>
                      <SelectItem value="restaurant">음식점</SelectItem>
                      <SelectItem value="bakery">베이커리</SelectItem>
                      <SelectItem value="chicken">치킨전문점</SelectItem>
                      <SelectItem value="pizza">피자전문점</SelectItem>
                      <SelectItem value="korean">한식당</SelectItem>
                      <SelectItem value="chinese">중식당</SelectItem>
                      <SelectItem value="japanese">일식당</SelectItem>
                      <SelectItem value="western">양식당</SelectItem>
                      <SelectItem value="fastfood">패스트푸드</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">지역 *</Label>
                  <Select onValueChange={(value) => handleInputChange("region", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="창업 희망 지역을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gangnam">강남구</SelectItem>
                      <SelectItem value="seocho">서초구</SelectItem>
                      <SelectItem value="songpa">송파구</SelectItem>
                      <SelectItem value="gangdong">강동구</SelectItem>
                      <SelectItem value="mapo">마포구</SelectItem>
                      <SelectItem value="yongsan">용산구</SelectItem>
                      <SelectItem value="jung">중구</SelectItem>
                      <SelectItem value="jongno">종로구</SelectItem>
                      <SelectItem value="seodaemun">서대문구</SelectItem>
                      <SelectItem value="hongdae">홍대</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="menu">주요 메뉴 *</Label>
                  <Input
                    id="menu"
                    placeholder="예: 아메리카노, 라떼, 샌드위치"
                    value={formData.menu}
                    onChange={(e) => handleInputChange("menu", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concept">콘셉트 *</Label>
                  <Textarea
                    id="concept"
                    placeholder="예: 북유럽 스타일의 미니멀한 인테리어, 직장인 타겟의 빠른 서비스"
                    value={formData.concept}
                    onChange={(e) => handleInputChange("concept", e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">키워드</Label>
                  <Input
                    id="keywords"
                    placeholder="예: 힐링, 모던, 친환경, 프리미엄"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange("keywords", e.target.value)}
                  />
                  <p className="text-sm text-gray-500">쉼표(,)로 구분하여 여러 키워드를 입력해주세요.</p>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      이전
                    </Link>
                  </Button>
                  <Button type="submit" className="px-8">
                    상권 분석 시작
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
