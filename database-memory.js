import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return this.#videos.values()
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoID, video)
    }
    update(id, video) {
        this.#videos.update(videoID, video)
    }

    delete(id) {
         this.#videos.delete(id)
    }
}
