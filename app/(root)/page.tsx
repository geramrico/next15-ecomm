const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Home = async () => {
  await delay(0)
  return <>Home Page</>
}

export default Home
