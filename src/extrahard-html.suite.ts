/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'
import Observer from './objects/Observer'

suite('Extra Hard Threshold', () => {

    suite('HTML', () => {

        test('Amazon', async () => {

            const file = Path.fromMouli('res/html/amazon.html')

            const exec1 = new Executable('antman', [
                file, '2'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '2'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(64) // verified score
        })

        test('Github', async () => {

            const file = Path.fromMouli('res/html/github.html')

            const exec1 = new Executable('antman', [
                file, '2'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '2'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(62) // verified score
        })

        test('Google', async () => {

            const file = Path.fromMouli('res/html/google.html')

            const exec1 = new Executable('antman', [
                file, '2'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '2'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(57) // verified score
        })

        test('Hacker News', async () => {

            const file = Path.fromMouli('res/html/hackernews.html')

            const exec1 = new Executable('antman', [
                file, '2'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '2'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(75) // verified score
        })

        test('Wikipedia', async () => {

            const file = Path.fromMouli('res/html/wikipedia.html')

            const exec1 = new Executable('antman', [
                file, '2'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '2'
            ])
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(69) // verified score
        })

    })

})
