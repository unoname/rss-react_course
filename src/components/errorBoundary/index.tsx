import { Component, ErrorInfo } from "react";

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		if (error) return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error);
		console.error("Component stack trace:", info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
