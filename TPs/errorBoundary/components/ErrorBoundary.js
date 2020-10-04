import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('catch :', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <span>Une erreur est survenue.</span>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary