import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries())
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }
    update(id, video) {
        this.#videos.update(videoId, video)
    }

    delete(id) {
         this.#videos.delete(id)
    }
}
