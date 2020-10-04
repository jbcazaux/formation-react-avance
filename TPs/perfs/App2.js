import React, {useEffect, useState} from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Click me !</button>
        <ComponentToOptimize counter={this.state.counter} />
      </div>
    )
  }
}

class Component1C extends React.Component {
  componentDidMount() {
    console.log('Component1 did mount')
  }
  componentWillUnmount() {
    console.log('Component1 will unmount')
  }
  render() {
    return <div style={{ backgroundColor: 'red', height: '100px', width: '100px' }}>Component1</div>
  }
}

const Component1 = () => {
  const [ts, setTs] = useState(new Date())

  useEffect(() => {
    console.log('Component1 did mount')
    return () => console.log('Component1 will unmount')
  }, [])

  return <div style={{ backgroundColor: 'red', height: '100px', width: '100px' }}>Component1 {ts.getTime()}</div>
}

class Component2C extends React.Component {
  componentDidMount() {
    console.log('Component2 did mount')
  }
  componentWillUnmount() {
    console.log('Component2 will unmount')
  }
  render() {
    return <div style={{ backgroundColor: 'green', height: '100px', width: '100px' }}>Component2</div>
  }
}

const Component2 = () => {
  const [ts, setTs] = useState(new Date())

  useEffect(() => {
    console.log('Component2 did mount')
    return () => console.log('Component2 will unmount')
  }, [])

  return <div style={{ backgroundColor: 'green', height: '100px', width: '100px' }}>Component2 {ts.getTime()}</div>
}



export default App

class ComponentToOptimize extends React.Component {
  constructor(props) {
    super(props)
    this.renderNotOptimized = this.renderNotOptimized.bind(this)
    this.renderWithNull = this.renderWithNull.bind(this)
    this.renderWithKey = this.renderWithKey.bind(this)
  }

  render() {
    // return this.renderNotOptimized()
     return this.renderWithNull();
    // return this.renderWithKey();
  }

  renderNotOptimized() {
    if (this.props.counter % 2 === 0) {
      return (
        <div>
          <Component1 />
          <Component2 />
        </div>
      )
    }

    return (
      <div>
        <Component2 />
      </div>
    )
  }

  renderWithNull() {
    return (
      <div>
        {this.props.counter % 2 === 0 ? <Component1 /> : null}
        <Component2 />
      </div>
    )
  }

  renderWithKey() {
    if (this.props.counter % 2 === 0) {
      return (
        <div>
          <Component1 key={'c1'} />
          <Component2 key={'c2'} />
        </div>
      )
    }

    return (
      <div>
        <Component2 key={'c2'} />
      </div>
    )
  }
}
