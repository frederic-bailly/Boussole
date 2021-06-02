basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.compassHeading() <= 22) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (input.compassHeading() <= 67) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            if (input.compassHeading() <= 122) {
                basic.showArrow(ArrowNames.West)
            } else {
                if (input.compassHeading() <= 157) {
                    basic.showArrow(ArrowNames.SouthWest)
                } else {
                    if (input.compassHeading() <= 202) {
                        basic.showArrow(ArrowNames.South)
                    } else {
                        if (input.compassHeading() <= 247) {
                            basic.showArrow(ArrowNames.SouthEast)
                        } else {
                            if (input.compassHeading() <= 292) {
                                basic.showArrow(ArrowNames.East)
                            } else {
                                if (input.compassHeading() <= 337) {
                                    basic.showArrow(ArrowNames.NorthEast)
                                } else {
                                    basic.showArrow(ArrowNames.North)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
