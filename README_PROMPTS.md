# PROMPTS.md - AI 에이전트 성격 및 행동 규칙 매뉴얼

## 📋 목적

**PROMPTS.md는 전체 시스템의 기반 규칙(공통 매뉴얼)입니다.**

AI 모델에게 적용될 행동 규칙, 응답 형식, 개발 가이드라인, 금지 요소들을 정의합니다.
AI가 어떻게 사고하고 어떻게 행동해야 하는지 규정한 AI 매뉴얼입니다.

## 🎯 누구를 위한 파일인가?

- **독자**: AI 에이전트 (시스템이 읽음)
- **목적**: AI의 성격, 말투, 규칙, 금지어, 포맷 정의
- **사용 시점**: AI가 모든 응답을 생성할 때 자동으로 참조

## 📝 무엇을 담는가?

### 1. **AI 성격 정의**
```markdown
## AI Personality
- 말투: 친절하고 간결하게 (친절·간결·기술적·공식적 등)
- 성격: 전문적이면서도 이해하기 쉽게
- 태도: 불확실할 땐 솔직하게 "모른다"고 표현
```
→ AI가 어떤 톤으로 사용자와 소통할지 결정

### 2. **금지어 및 제약 규칙**
```markdown
## Forbidden Words & Rules
❌ 사용 금지:
- "probably" (아마도)
- "maybe" (어쩌면)
- "I think" (내 생각엔)

✅ 대신 사용:
- "확인이 필요합니다"
- "문서에 따르면"
- "테스트 결과는"
```
→ Hallucination 방지 및 정확성 보장

### 3. **응답 포맷 규칙**
```markdown
## Response Format
모든 응답은 다음 형식을 따름:
1. 간단한 요약 (1-2문장)
2. 상세 설명 (필요시)
3. 코드 예시 (있다면 마크다운 코드블럭)
4. 다음 단계 제안 (optional)
```
→ 일관된 응답 구조 유지

### 4. **코드 작성 규칙**
```markdown
## Code Generation Rules
- 언어: TypeScript 필수
- 스타일: PascalCase (컴포넌트), camelCase (함수)
- 비동기: async/await 사용 (then/catch 금지)
- 에러 처리: try/catch 필수
- 주석: 복잡한 로직에만 최소한으로
```
→ 생성되는 모든 코드의 일관성

### 5. **체크리스트 및 검증 규칙**
```markdown
## Validation Checklist
코드 생성 전 확인:
- [ ] TypeScript 타입 정의됨
- [ ] 에러 핸들링 포함
- [ ] 보안 취약점 없음
- [ ] 성능 고려됨
```
→ AI가 스스로 품질 검증

### 6. **문제 해결 접근법**
```markdown
## Problem Solving Approach
1. 에러 메시지 정확히 분석
2. 공식 문서 우선 참조
3. 단계별 디버깅 제안
4. 여러 해결책 제시 (장단점 포함)
```
→ 일관된 문제 해결 패턴

### 7. **버전 관리 규칙**
```markdown
## PROMPTS.md Versioning
- v1.0: 초기 규칙 (2025-01-15)
- v1.1: 금지어 추가 (2025-02-10)
- v2.0: 응답 포맷 변경 (2025-03-01)
```
→ 프롬프트도 코드처럼 버전 관리

### 8. **팀 공유 프롬프트 템플릿**
```markdown
## Shared Prompt Templates
### API 개발 프롬프트
"RESTful API를 만들어줘. POST /api/users 엔드포인트.
입력 검증, 에러 핸들링, TypeScript 사용"

### 컴포넌트 생성 프롬프트
"React 컴포넌트 만들어줘. 
Server Component 기본, Client는 hooks 사용 시만"
```
→ 팀 전체가 동일한 품질의 AI 결과물 확보

## 🔄 현재 프로젝트의 PROMPTS.md

**위치**: `c:\02.Tutorials\ai-prompt-share\PROMPTS.md`

**내용**:
- AI 에이전트 성격 정의 (친절, 간결, 기술적)
- 응답 형식 규칙 (마크다운, 코드블럭)
- 코드 생성 규칙 (TypeScript, async/await)
- 금지어 목록 ("probably", "maybe" 등)
- 체크리스트 (타입 정의, 에러 핸들링)
- 문제 해결 접근법
- 팀 공유 프롬프트 템플릿
- 버전 히스토리 (v1.0 → v2.0)

## 💡 예시 시나리오

### 시나리오 1: AI 성격 통일
```
팀장: "AI가 때로는 너무 길게 답하고, 때로는 전문용어 투성이네?"

해결: PROMPTS.md에 다음 규칙 추가
- 말투: "간결하게, 3문장 이내"
- 금지: "전문 용어는 설명과 함께"
→ 모든 개발자가 일관된 AI 응답 받음!
```

### 시나리오 2: Hallucination 방지
```
PM: "AI가 헛소리(hallucination)를 너무 많이 하네요"

해결: PROMPTS.md v2.0 업데이트
- 금지어 추가: "probably", "maybe", "I think"
- 규칙 추가: "불확실하면 '확인이 필요합니다'라고 답하기"
→ AI가 더 정확하게 답변!
```

### 시나리오 3: 코드 품질 향상
```
개발자: "AI가 만든 코드에 에러 처리가 없어요"

해결: PROMPTS.md에 체크리스트 추가
- [ ] try/catch 포함됨
- [ ] TypeScript 타입 정의됨
- [ ] 에러 메시지 명확함
→ AI가 스스로 품질 검증 후 코드 생성!
```

## 🆚 AGENTS.md와의 차이

| 항목 | PROMPTS.md | AGENTS.md |
|------|------------|-----------|
| **독자** | AI 에이전트 (시스템) | AI 코딩 어시스턴트 |
| **목적** | AI 성격 및 행동 규칙 | 코드 생성 가이드 |
| **언어** | 규칙과 제약 | 패턴과 예시 |
| **내용** | 말투, 금지어, 포맷, 체크리스트 | 코딩 스타일, 아키텍처 패턴 |
| **구조** | 매뉴얼 스타일 (규칙 나열) | 치트시트 스타일 (코드 예시) |
| **예시** | "친절하게 말해", "'probably' 금지" | "컴포넌트는 PascalCase로" |
| **버전 관리** | v1 → v2 (규칙 변경 시) | 프로젝트 진행에 따라 업데이트 |

## 📊 비교표: 같은 내용, 다른 표현

### 예시: AI 응답 규칙

**PROMPTS.md (AI 행동 규칙)**
```markdown
## AI Response Rules

### Tone & Personality
- 말투: 친절하고 전문적
- 문장: 3문장 이내로 간결하게
- 불확실성: "확인이 필요합니다"로 표현

### Forbidden Words
❌ 절대 사용 금지:
- "probably" (아마도)
- "maybe" (어쩌면)  
- "I think" (내 생각엔)

### Code Format
모든 코드는:
1. TypeScript 사용
2. 마크다운 코드블럭으로 감싸기
3. try/catch 에러 핸들링 포함
4. 타입 정의 필수
```

**AGENTS.md (AI 코드 생성 가이드)**
```markdown
## Coding Standards

### TypeScript
- Always use TypeScript for all files
- Define interfaces for props
- Use `type` for unions, `interface` for objects

### React Components
```typescript
// Server Component (default)
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// Client Component (when needed)
'use client';
import { useState } from 'react';
export default function Button() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Rules:
- Server Components by default
- Use 'use client' only when interactive
```

**차이점**:
- PROMPTS.md: AI의 "성격과 행동 방식" 규정 (어떻게 말하고, 뭘 금지하고)
- AGENTS.md: AI의 "코드 작성 방법" 가이드 (어떤 패턴으로 코드 만들지)

## 📚 요약

**PROMPTS.md = AI 에이전트의 성격 및 행동 규칙 매뉴얼**

1. **AI가 어떻게 사고하고 행동할지 정의**
   - 어떤 문제를 해결하는 AI인가?
   - 말투는? (친절·간결·기술적·공식적 등)
   - 사용하면 안 되는 단어는?
   - 코드를 만들 때 지켜야 할 포맷은?

2. **팀/시스템 내부에서 공유되는 "AI 사용 가이드라인"**
   - 개발자가 바뀌어도 일관된 AI 행동 유지
   - "우리 시스템에서는 AI에게 이렇게 물어봐야 한다"
   - API 프롬프트 템플릿, 코딩 스타일 프롬프트, 분석 프롬프트 등

**핵심**: "AI야, 이렇게 생각하고 이렇게 행동해"

---

## 🎓 학습 가이드

### 초보자를 위한 비유

**PROMPTS.md**: AI의 "성격 및 행동 지침서"
- "친절하게 말해"
- "전문용어 쓰지 마"
- "불확실하면 '모른다'고 해"
- "코드는 TypeScript로 작성해"
- AI 에이전트가 자동으로 읽고 따름
- 프롬프트도 코드처럼 버전 관리 (v1 → v2 → v3)

**AGENTS.md**: 가전제품 "제조 매뉴얼"
- "이 부품은 이렇게 만들어야 함"
- "규격은 정확히 이래야 함"
- "조립 순서는 반드시 이거"
- "제조사 엔지니어를 위한 기술 문서"

**README.md**: 가전제품 "사용 설명서"
- "전원 버튼 여기 있어요"
- "이렇게 설정하세요"
- "문제 생기면 이렇게 하세요"
- "처음 사용하는 분들을 위한 가이드"

---

## 🔍 실제 사용 예시

### AI에게 일관된 성격 부여
```bash
# PROMPTS.md 작성 후
# 모든 개발자가 동일한 품질의 AI 응답 받음

개발자 A: "컴포넌트 만들어줘"
AI: [PROMPTS.md 읽음] → TypeScript + Server Component 생성

개발자 B: "API 만들어줘"  
AI: [PROMPTS.md 읽음] → try/catch + 타입 정의 포함

개발자 C: "이거 어떻게 해?"
AI: [PROMPTS.md 읽음] → 간결하게 3문장으로 답변
```

### 프롬프트 버전 업그레이드
```bash
# v1.0: 초기 규칙
"친절하게 답해"

# v1.1: 금지어 추가
"친절하게 답해, 'probably' 쓰지 마"

# v2.0: 응답 포맷 변경
"친절하게 답해, 'probably' 쓰지 마, 코드는 마크다운으로 감싸"
```

### 팀 공유 프롬프트 활용
```bash
# PROMPTS.md에 템플릿 저장
"API 만들어줘: POST /api/users, 입력 검증, 에러 핸들링, TypeScript"

# 모든 팀원이 동일한 프롬프트 사용
→ 일관된 코드 품질 유지
```

---

## 📝 작성 팁

### 좋은 PROMPTS.md 특징
✅ AI 성격 명확히 정의 (친절, 간결, 기술적 등)
✅ 금지어 목록 명확 ("probably", "maybe" 등)
✅ 응답 포맷 규칙 구체적
✅ 코드 생성 규칙 상세
✅ 체크리스트로 품질 검증
✅ 버전 관리 (v1.0, v1.1, v2.0)
✅ 팀 공유 프롬프트 템플릿 포함

### 나쁜 PROMPTS.md 예시
❌ "좋은 코드 만들어줘" (어떻게?)
❌ 규칙이 너무 모호함
❌ 금지어 없음 (hallucination 발생)
❌ 응답 형식 불명확
❌ 버전 관리 안 함

---

**작성일**: 2025년 11월 28일
