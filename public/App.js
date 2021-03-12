import { animeBlocks } from './animeBlocks.js';
import { getMedia } from './getMedia.js';
//import { Emitter } from './Emitter.js';

const App = {
  async start() {
    try {
      
      const images = await getMedia.init()
      animeBlocks.init(images) 

    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }