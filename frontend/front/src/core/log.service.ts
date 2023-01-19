function init() {
    console.log("Log service initialized successfully")
}

function log(error: any) {
    console.warn(error)
}

const logger = {
    init,
    log
}

export default logger;