// const API_KEY = process.env.KEY
// const API_BASE = process.env.BASE


const basicFetch = async (endpoint) => {
  const req = await fetch(`${process.env.BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${process.env.KEY}`)
      },
    ]
  }
}