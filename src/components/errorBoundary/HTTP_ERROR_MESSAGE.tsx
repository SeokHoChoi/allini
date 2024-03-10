export const HTTP_ERROR_MESSAGE = {
  400: {
    HEADING: "잘못된 요청입니다.",
    BODY: "확인 후 다시 시도해주세요.",
    BUTTON: "홈으로",
  },
  401: {
    HEADING: "권한이 없습니다.",
    BODY: "인증 정보가 부족하거나 잘못되었습니다.",
  },
  403: {
    HEADING: "잘못된 요청입니다.",
    BODY: "요청한 리소스에 대한 접근 권한이 없습니다.",
    BUTTON: "홈으로",
  },
  404: {
    HEADING: "404",
    BODY: "잘못된 요청 주소입니다.",
    BUTTON: "홈으로",
  },
  500: {
    HEADING: "서버 에러가 발생했습니다.",
    BODY: "잠시 후 다시 요청해주세요.",
    BUTTON: "새로고침",
  },
  501: {
    HEADING: "요청한 URI의 메소드에 대해 서버에 구현돼 있지 않습니다.",
    BODY: "미구현 상태입니다.",
    BUTTON: "홈으로",
  },
} as const;
