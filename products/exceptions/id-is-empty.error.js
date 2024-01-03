export class IdIsEmptyError extends TypeError {
    status = 0

    constructor(payload) {
        super(payload.message)
        this.status = payload.status
    }
}

export class NameIsEmptyError extends TypeError {
    status = 0

    constructor(payload) {
        super(payload.message)
        this.status = payload.status
    }
}

export class StockNegativeError extends RangeError {
    status = 0

    constructor(payload) {
        super(payload.message)
        this.status = payload.status
    }
}

export class StockNotValidError extends TypeError {
    status = 0

    constructor(payload) {
        super(payload.message)
        this.status = payload.status
    }
}