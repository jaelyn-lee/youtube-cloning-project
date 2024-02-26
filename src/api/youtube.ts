import axios from 'axios'

export async function search(id: string | undefined) {
  return await axios
    .get(`/data/${id ? 'leo-woodall' : 'most-popular'}.json`)
    .then((res) => res.data.items)
}
