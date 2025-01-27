const delay = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const Home = async () => {
  //await delay(2000)
  return <>Home Page</>
}

export default Home
