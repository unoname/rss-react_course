import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.scss";
import ErrorBoundary from "./components/errorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary fallback={<p>Woops, something wrong!</p>}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
);
