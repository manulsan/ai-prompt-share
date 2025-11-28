# PROMPTS.md - 프로젝트 문서화 및 개발 가이드

## 📋 목적

**PROMPTS.md는 개발자(사람)를 위한 프로젝트 전체 문서입니다.**

이 파일은 새로운 개발자가 프로젝트를 빠르게 이해하고, 설정하고, 개발할 수 있도록 돕습니다.

## 🎯 누구를 위한 파일인가?

- **독자**: 개발자 (당신, 팀원, 미래의 당신)
- **목적**: 프로젝트 설정, 실행, 문제 해결 가이드
- **사용 시점**: 프로젝트 시작, 설정, 배포, 문제 해결 시

## 📝 무엇을 담는가?

### 1. **프로젝트 개요**
```markdown
## Project Overview
Next.js 블로그 앱 with Google OAuth와 MongoDB
```
→ "이 프로젝트가 뭐하는 건지" 한눈에 파악

### 2. **기술 스택 (상세 버전 포함)**
```markdown
## Tech Stack
- Framework: Next.js 15.1.6 (App Router)
- React: 19.2.0
- Database: MongoDB with Mongoose
- Auth: NextAuth.js 4.24.13
```
→ 정확한 버전으로 호환성 문제 방지

### 3. **환경 변수 설정**
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id
MONGODB_URI=mongodb+srv://...
```
→ 복사-붙여넣기로 바로 설정 가능

### 4. **설치 및 실행 방법**
```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env.local

# 3. 개발 서버 실행
npm run dev
```
→ 단계별로 따라하면 프로젝트 실행

### 5. **주요 기능 설명**
- 사용자 인증 흐름
- 데이터베이스 스키마
- API 엔드포인트
- 주요 컴포넌트 설명

→ 프로젝트 구조와 작동 방식 이해

### 6. **문제 해결 가이드**
```markdown
### "redirect_uri_mismatch" 에러
- 원인: Google OAuth 설정 불일치
- 해결: http://localhost:3000/api/auth/callback/google 추가
```
→ 자주 발생하는 에러의 해결책

### 7. **개발 워크플로우**
```markdown
## Development Workflow
1. 파일 수정
2. 자동 새로고침 확인
3. 브라우저 콘솔 체크
4. 터미널 에러 확인
```
→ 일상적인 개발 과정 가이드

### 8. **배포 가이드**
```markdown
## Deploying to Production
1. NEXTAUTH_SECRET 생성
2. NEXTAUTH_URL을 프로덕션 도메인으로
3. Google OAuth에 프로덕션 URI 추가
```
→ 실제 서비스 배포 방법

## 🔄 현재 프로젝트의 PROMPTS.md

**위치**: `c:\02.Tutorials\ai-prompt-share\PROMPTS.md`

**내용**:
- 블로그 앱 프로젝트 개요
- 전체 프로젝트 구조 트리
- 환경 변수 전체 목록
- Google OAuth 설정 방법
- MongoDB 설정 방법
- 인증 흐름 상세 설명
- 데이터베이스 스키마
- 일반적인 에러와 해결책
- 개발 워크플로우
- 배포 체크리스트
- 유용한 명령어 모음

## 💡 예시 시나리오

### 시나리오 1: 새 팀원이 프로젝트 시작
```
새 개발자: "이 프로젝트 어떻게 시작하지?"

PROMPTS.md를 읽고:
1. npm install 실행 (설치 가이드)
2. .env.local 파일 생성 (환경 변수)
3. Google OAuth 설정 (설정 가이드)
4. MongoDB 연결 (데이터베이스 설정)
5. npm run dev 실행 (실행 방법)
→ 10분 안에 프로젝트 실행 성공!
```

### 시나리오 2: 에러 발생
```
개발자: "redirect_uri_mismatch 에러가 나요"

PROMPTS.md의 문제 해결 섹션:
- 원인 확인
- 해결 방법 확인
- Google Console에서 수정
→ 5분 안에 문제 해결!
```

### 시나리오 3: 3개월 후 다시 보는 프로젝트
```
개발자: "어떻게 실행하는 거였더라?"

PROMPTS.md 확인:
- 환경 변수 어디 있는지
- 어떤 명령어로 실행하는지
- 주요 기능이 뭐였는지
→ 빠르게 기억 되살림!
```

## 🆚 AGENTS.md와의 차이

| 항목 | PROMPTS.md | AGENTS.md |
|------|------------|-----------|
| **독자** | 개발자 (사람) | AI 코딩 어시스턴트 |
| **목적** | 프로젝트 이해 및 설정 | AI가 코드 생성하도록 가이드 |
| **언어** | 친절한 설명, 단계별 가이드 | 간결한 규칙, 패턴 |
| **내용** | 설정 방법, 문제 해결, 배포 | 코딩 스타일, 아키텍처 패턴 |
| **구조** | README 스타일 (긴 설명) | 치트시트 스타일 (짧고 명확) |
| **예시** | "Google OAuth 설정 3단계" | "인증 체크: getServerSession 사용" |

## 📊 비교표: 같은 내용, 다른 표현

### 예시: 환경 변수

**PROMPTS.md (개발자용)**
```markdown
## 환경 변수 설정하기

프로젝트를 실행하기 위해 몇 가지 환경 변수를 설정해야 합니다.

### 1단계: .env.local 파일 만들기
프로젝트 루트에 `.env.local` 파일을 만드세요.

### 2단계: 필요한 변수 추가
다음 변수들을 복사해서 붙여넣으세요:

```env
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id
```

### 3단계: 실제 값으로 교체
- `your-secret-here`: 이 명령어로 생성하세요 → `openssl rand -base64 32`
- `your-client-id`: Google Cloud Console에서 복사하세요

### 주의사항
⚠️ .env.local 파일은 절대 Git에 커밋하지 마세요!
```

**AGENTS.md (AI용)**
```markdown
## Environment Variables

Required:
- `NEXTAUTH_SECRET` - 32+ char random string
- `GOOGLE_CLIENT_ID` - From Google Console
- `MONGODB_URI` - MongoDB connection string with DB name

Pattern:
```typescript
// Access env vars (server-side only)
process.env.NEXTAUTH_SECRET
process.env.GOOGLE_CLIENT_ID
```

Rules:
- Never commit .env.local to Git
- Validate required vars on startup
- Use different values for dev/production
```

**차이점**:
- PROMPTS.md: 단계별, 친절한 설명, 주의사항 포함
- AGENTS.md: 간결한 리스트, 코드 패턴, 규칙만

## 📚 요약

**PROMPTS.md = 개발자를 위한 프로젝트 설명서**

- 프로젝트 빠르게 시작하기
- 설정 방법 자세히 설명
- 문제 발생 시 해결 가이드
- 배포 및 운영 가이드

**핵심**: "개발자야, 이 프로젝트는 이렇게 돌아가"

---

## 🎓 학습 가이드

### 초보자를 위한 비유

**PROMPTS.md**: 가전제품 "사용 설명서"
- "전원 버튼 여기 있어요"
- "이렇게 설정하세요"
- "문제 생기면 이렇게 하세요"
- "처음 사용하는 분들을 위한 가이드"

**AGENTS.md**: 가전제품 "제조 매뉴얼"
- "이 부품은 이렇게 만들어야 함"
- "규격은 정확히 이래야 함"
- "조립 순서는 반드시 이거"
- "제조사 엔지니어를 위한 기술 문서"

---

## 🔍 실제 사용 예시

### 프로젝트 시작 시
```bash
# 1. PROMPTS.md 열기
# 2. "Setup Instructions" 섹션 찾기
# 3. 단계별로 따라하기

npm install  # ✅ 완료
.env.local 생성  # ✅ 완료
Google OAuth 설정  # ✅ 완료
npm run dev  # ✅ 프로젝트 실행!
```

### 에러 발생 시
```bash
# 에러 메시지 복사
# PROMPTS.md의 "Troubleshooting" 섹션 검색
# 해결 방법 찾아서 적용
```

### 새 기능 추가 시
```bash
# PROMPTS.md에서 프로젝트 구조 확인
# 비슷한 기능 예시 찾기
# AGENTS.md는 AI가 참고 (자동)
```

---

## 📝 작성 팁

### 좋은 PROMPTS.md 특징
✅ 단계별로 명확한 설명
✅ 스크린샷이나 코드 예시 풍부
✅ 자주 발생하는 문제와 해결책
✅ 실제 명령어와 값 예시
✅ 초보자도 이해할 수 있는 언어
✅ 목차로 빠른 탐색 가능

### 나쁜 PROMPTS.md 예시
❌ "설정하세요" (어떻게?)
❌ 너무 짧고 불친절
❌ 전문 용어만 나열
❌ 예시 코드 없음
❌ 에러 해결 방법 없음

---

**작성일**: 2025년 11월 28일
