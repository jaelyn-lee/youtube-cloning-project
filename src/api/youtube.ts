import axios, { AxiosInstance } from 'axios'

export default class Youtube {
  private httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      params: {
        key: import.meta.env.VITE_API_KEY,
      },
    })
  }

  async search(id: string | undefined) {
    return id ? this.#searchById(id) : this.#searchMostPopular()
  }

  async channelImageURL(id: string) {
    return this.#channels(id)
  }

  // async relatedVideos(id: string) {

  // }

  async #searchById(id: unknown) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: { id: { videoId: unknown } }) => ({
          ...item,
          id: item.id.videoId,
        }))
      )
  }

  async #searchMostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          maxResult: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items)
  }

  async #channels(id: string) {
    return this.httpClient
      .get('channels', {
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url)
  }
}
