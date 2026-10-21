import { Component } from 'react'

// React error boundaries require a class; page components remain functional.
export default class PageLoadBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() { return { failed: true } }

  render() {
    if (this.state.failed) return <section className="site-container section-space" aria-labelledby="page-load-title">
      <h1 className="section-title" id="page-load-title">This page couldn’t load.</h1>
      <p className="mt-4">Check your connection and reload the page to try again.</p>
      <a className="button button--outline mt-6" href={this.props.path}>Reload page</a>
    </section>
    return this.props.children
  }
}
