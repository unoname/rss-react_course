declare interface ErrorBoundaryProps {
	fallback: React.ReactElement;
	children: React.ReactNode;
}

declare interface ErrorBoundaryState {
	hasError: boolean;
}
