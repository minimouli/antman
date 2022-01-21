/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'
import Observer from './objects/Observer'

suite('Easy Threshold', () => {

    suite('Edge cases', () => {

        test('Ricky Reed - Good Vibrations', async () => {

            const file = Path.fromMouli('res/songs/good-vibrations.lyr')

            const exec1 = new Executable('antman', [
                file, '1'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '1'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(2)
        })

        test('Pixel', async () => {

            const file = Path.fromMouli('res/images/pix.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(2)
        })

    })

})
