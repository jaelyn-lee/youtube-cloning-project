// import axios from 'axios'

// export default class MockYoutube {
//   constructor() {}

//   async search(id: string | undefined) {
//     return id ? this.#searchById(id) : this.#searchMostPopular()
//   }

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   async #searchById(id) {
//     return axios
//       .get(`/data/leo-woodall.json`)
//       .then((res) => res.data.items)
//       .then((items) =>
//         items.map((item: { id: { videoId: unknown } }) => ({
//           ...item,
//           id: item.id.videoId,
//         }))
//       )
//   }

//   async #searchMostPopular() {
//     return axios.get(`/data/most-popular.json`).then((res) => res.data.items)
//   }
// }
