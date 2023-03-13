import useWindowSize from './useWindowSize'

const App = () => {
  const [width, height] = useWindowSize()

  return (
    <div>
      Current width: {width}, currentHeight: {height}
    </div>
  )
}

export default App
