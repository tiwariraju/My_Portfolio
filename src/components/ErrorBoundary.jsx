import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: '#0D0D0D',
            color: '#E0E0E0',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div style={{ maxWidth: '520px', textAlign: 'center' }}>
            <h1 style={{ color: '#00BFA6', marginBottom: '12px' }}>Something went wrong</h1>
            <p style={{ color: '#A0A0A0', marginBottom: '20px' }}>
              {this.state.error?.message || 'Failed to load the portfolio.'}
            </p>
            <p style={{ fontSize: '14px', color: '#B0B0B0' }}>
              Run <code style={{ color: '#00BFA6' }}>npm run dev</code> in the project folder, then open{' '}
              <strong>http://localhost:5173</strong>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
