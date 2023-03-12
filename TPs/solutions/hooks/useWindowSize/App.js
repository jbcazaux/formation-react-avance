import useWindowSize from './useWindowSize'

const App = () => {
  const [height, width] = useWindowSize()

  return (
    <div>
      Current width: {width}, currentHeight: {height}
    </div>
  )
}

export default App
