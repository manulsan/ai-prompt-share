# AGENTS.md - AI Agent 지침서

## 📋 목적

**AGENTS.md는 GitHub Copilot 같은 AI 에이전트(코딩 어시스턴트)를 위한 지침서입니다.**

이 파일은 AI가 당신의 프로젝트를 이해하고, 올바른 코드를 생성하도록 돕습니다.

## 🎯 누구를 위한 파일인가?

- **독자**: GitHub Copilot, Cursor AI, VS Code의 AI 어시스턴트
- **목적**: AI가 프로젝트의 코딩 스타일, 아키텍처, 규칙을 따르도록 가이드
- **사용 시점**: AI가 코드를 생성하거나 편집할 때 자동으로 참조

## 📝 무엇을 담는가?

### 1. **프로젝트 구조**
```
app/
├── api/          # API 라우트
├── components/   # 리액트 컴포넌트
├── posts/        # 포스트 관련 페이지
```
→ AI가 파일을 어디에 생성할지 알 수 있음

### 2. **코딩 규칙**
```typescript
// ✅ 좋은 예: PascalCase 컴포넌트
export default function UserProfile() { }

// ❌ 나쁜 예: camelCase 컴포넌트
export default function userProfile() { }
```
→ AI가 프로젝트 스타일을 따르도록 함

### 3. **기술 스택**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

→ AI가 올바른 문법과 API를 사용하도록 함

### 4. **아키텍처 패턴**
```typescript
// Server Component (기본)
export default async function PostsPage() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}

// Client Component (필요시)
'use client';
export default function LikeButton() { }
```
→ AI가 프로젝트 패턴을 이해하고 따름

### 5. **일반적인 작업**
- "새 페이지 추가하는 방법"
- "API 라우트 만드는 방법"
- "데이터베이스 쿼리 작성법"

→ AI가 반복 작업을 자동화

## 🔄 현재 프로젝트의 AGENTS.md

**위치**: `c:\02.Tutorials\ai-prompt-share\AGENTS.md`

**내용**:
- AI Prompt Share 프로젝트 설명
- Next.js 15, MongoDB, NextAuth 구조
- 컴포넌트 패턴 (Server/Client)
- 데이터베이스 스키마 (Post, User)
- API 라우트 패턴
- 코딩 스타일 가이드
- 보안 규칙
- 디버깅 팁

## 💡 예시 시나리오

### 시나리오 1: "새 페이지 만들어줘"
```
사용자: "사용자 프로필 페이지 만들어줘"

AI가 AGENTS.md를 읽고:
1. app/users/[userId]/page.tsx 생성 (프로젝트 구조 참조)
2. Server Component로 작성 (아키텍처 패턴 참조)
3. MongoDB에서 사용자 데이터 가져오기 (데이터베이스 패턴 참조)
4. Tailwind CSS로 스타일링 (기술 스택 참조)
```

### 시나리오 2: "API 라우트 추가해줘"
```
사용자: "댓글 생성 API 만들어줘"

AI가 AGENTS.md를 읽고:
1. app/api/comments/route.ts 생성 (API 패턴 참조)
2. POST 메서드 추가 (HTTP 메서드 규칙 참조)
3. 세션 체크 추가 (보안 규칙 참조)
4. MongoDB에 저장 (데이터베이스 패턴 참조)
```

## 🆚 PROMPTS.md와의 차이

| 항목 | AGENTS.md | PROMPTS.md |
|------|-----------|------------|
| **독자** | AI 코딩 어시스턴트 (Copilot) | 개발자 (사람) |
| **목적** | AI가 코드를 생성하도록 가이드 | 개발자가 프로젝트를 이해하도록 도움 |
| **내용** | 코딩 규칙, 패턴, 구조 | 프로젝트 개요, 설정, 문제 해결 |
| **사용 시점** | AI가 코드 생성할 때 자동 참조 | 개발자가 프로젝트 설정/문제 해결 시 |
| **예시** | "컴포넌트는 PascalCase로" | "Google OAuth 설정 방법" |

## 📚 요약

**AGENTS.md = AI를 위한 코딩 교과서**

- AI가 당신의 프로젝트 스타일을 이해
- AI가 일관된 코드를 생성
- AI가 프로젝트 구조를 따름
- 팀의 코딩 규칙을 AI에게 전달

**핵심**: "AI야, 우리 프로젝트는 이렇게 코딩해"

---

## 🎓 학습 가이드

### 초보자를 위한 비유

**AGENTS.md**: 신입 개발자에게 주는 "코딩 스타일 가이드"
- "우리 회사는 탭 대신 스페이스 2칸 써요"
- "컴포넌트 파일명은 PascalCase로 해요"
- "이렇게 API 호출하세요"

**PROMPTS.md**: 프로젝트 "사용 설명서"
- "환경 변수 이렇게 설정하세요"
- "서버 이렇게 실행하세요"
- "에러 나면 이렇게 해결하세요"

---

**작성일**: 2025년 11월 28일
