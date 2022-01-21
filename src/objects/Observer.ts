/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fs from 'fs'
import { ExpectError } from '@minimouli/framework'
import { Path } from '@minimouli/fs'
import { Hints } from '@minimouli/types'

const getFileSize = (path: string): number => {

    const { size } = fs.statSync(path)

    return size
}

class Observer {

    private originalSize: number
    private minifiedSize: number

    constructor(originalFilePath: Path, minifiedFilePath: Path) {

        this.originalSize = getFileSize(originalFilePath.toString())
        this.minifiedSize = getFileSize(minifiedFilePath.toString())
    }

    checkScoreIsAbove(threshold: number): void {

        const score = Math.round(100 - (100 / this.originalSize * this.minifiedSize))

        if (score > threshold)
            return

        const hint: Hints.CompHint = {
            type: Hints.HintType.COMP,
            status: Hints.HintStatus.FAILURE,
            message: 'The compression score is insufficient.',
            symbol: Hints.CompSymbol.GREATER_THAN,
            received: {
                value: score.toString(),
                type: Hints.ObjectType.NUMBER
            },
            expected: {
                value: threshold.toString(),
                type: Hints.ObjectType.NUMBER
            }
        }

        throw new ExpectError(hint)
    }

}

export default Observer
