class Media {
    async getCamera(audio = false, video = true) {
        console.log(navigator.mediaDevices.getUserMedia({
            video, audio
        }))

        return navigator.mediaDevices.getUserMedia({
            video, audio
        })
    }
}