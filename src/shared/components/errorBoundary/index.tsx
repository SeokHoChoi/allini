/**
 * Axios에서 발생하는 에러를 표현하는 타입입니다.
 */
import { AxiosError } from "axios";
import { Component, ElementType, ErrorInfo, ReactNode } from "react";
import { HTTP_ERROR_MESSAGE } from "./HTTP_ERROR_MESSAGE";

/**
 * ErrorBoundary 컴포넌트에 전달되는 props 타입입니다.
 */
interface Props {
  children: ReactNode; // 자식 컴포넌트들
  fallback: ElementType; // 에러 발생 시 표시할 대체 UI 컴포넌트
  onReset: () => void; // 에러 상태를 재설정할 때 호출되는 함수
}

/**
 * ErrorBoundary 컴포넌트의 상태 타입입니다.
 */
interface State {
  hasError: boolean; // 에러 발생 여부
  errorInfo: AxiosError | null;
  customError: {
    HEADING: string;
    BODY: string;
    BUTTON: string;
  } | null;
}

/**
 * ErrorBoundary 컴포넌트의 초기 상태입니다.
 */
const initialState: State = {
  hasError: false,
  errorInfo: null,
  customError: null,
};

/**
 * ErrorBoundary 클래스 컴포넌트입니다.
 * 자식 컴포넌트에서 발생하는 에러를 잡아내어 지정된 대체 UI를 표시합니다.
 */
export class ErrorBoundary extends Component<Props, State> {
  /**
   * 생성자 함수입니다.
   * 컴포넌트의 상태를 초기화하고, 이벤트 핸들러를 바인딩합니다.
   */
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  /**
   * 자식 컴포넌트에서 발생한 에러를 잡아내는 클래스 메서드입니다.
   * 에러 정보를 상태에 저장합니다.
   */
  static getDerivedStateFromError(errorInfo: AxiosError | null) {
    const status = errorInfo?.response?.status;
    const customError = status ? HTTP_ERROR_MESSAGE[status] : null;

    return { hasError: true, customError };
  }

  /**
   * 자식 컴포넌트에서 발생한 에러를 잡아내는 클래스 메서드입니다.
   * 에러 정보와 에러 정보를 생성한 스택 추적을 콘솔에 출력합니다.
   * 추후 백엔드 or 센트리에서 활용 예정입니다.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("error", error, "errorInfo", errorInfo);
  }

  /**
   * 에러 상태를 재설정하는 메서드입니다.
   * 프로퍼티로 전달받은 onReset 함수를 호출하고, 상태를 초기화합니다.
   */
  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset === null ? void 0 : this.props.onReset();
    this.reset();
  };

  /**
   * 상태를 초기화하는 메서드입니다.
   */
  reset() {
    this.setState(initialState);
  }

  /**
   * 컴포넌트의 렌더링 메서드입니다.
   * 에러가 발생한 경우, 프로퍼티로 전달받은 fallback 컴포넌트를 렌더링합니다.
   * 에러가 발생하지 않은 경우, 자식 컴포넌트들을 렌더링합니다.
   */
  render() {
    if (this.state.hasError) {
      return (
        <this.props.fallback
          errorInfo={this.state.errorInfo}
          customError={this.state.customError}
          onReset={this.onResetErrorBoundary}
        />
      );
    }
    return this.props.children;
  }
}
