/**
 * Axios에서 발생하는 에러를 표현하는 타입입니다.
 */
import { AxiosError } from "axios";
import { Component, ElementType, ErrorInfo, ReactNode } from "react";

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
  errorInfo: Error | AxiosError | null; // 에러 정보
}

/**
 * ErrorBoundary 컴포넌트의 초기 상태입니다.
 */
const initialState: State = {
  hasError: false,
  errorInfo: null,
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
    this.captureReject = this.captureReject.bind(this);
  }

  /**
   * 자식 컴포넌트에서 발생한 에러를 잡아내는 클래스 메서드입니다.
   * 에러 정보를 상태에 저장합니다.
   */
  static getDerivedStateFromError(errorInfo: Error | AxiosError) {
    return { hasError: true, errorInfo: errorInfo };
  }

  /**
   * 컴포넌트가 마운트될 때, 비동기 에러 캡처를 위한 이벤트 리스너를 추가합니다.
   */
  componentDidMount() {
    window.addEventListener("unhandledrejection", this.captureReject);
  }

  /**
   * 컴포넌트가 언마운트될 때, 비동기 에러 캡처를 위한 이벤트 리스너를 제거합니다.
   */
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.captureReject);
  }

  /**
   * 비동기 에러를 캡처하는 이벤트 핸들러입니다.
   * 에러 정보를 상태에 저장합니다.
   */
  captureReject(e: PromiseRejectionEvent) {
    e.preventDefault();

    console.log(e.reason);
    console.log(e.reason instanceof Error);

    this.setState({ hasError: true, errorInfo: e.reason });
  }

  /**
   * 자식 컴포넌트에서 발생한 에러를 잡아내는 클래스 메서드입니다.
   * 에러 정보와 에러 정보를 생성한 스택 추적을 콘솔에 출력합니다.
   * 추후 백엔드 or 센트리에서 활용 예정입니다.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
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
          onError={this.state.errorInfo}
          onReset={this.onResetErrorBoundary}
        />
      );
    }
    return this.props.children;
  }
}
