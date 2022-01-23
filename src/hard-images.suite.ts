/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'
import Observer from './objects/Observer'

suite('Hard Threshold', () => {

    suite('Images', () => {

        test('Carapuce', async () => {

            const file = Path.fromMouli('res/images/carapuce.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(88) // verified score
        })

        test('Epitech', async () => {

            const file = Path.fromMouli('res/images/epitech.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(75) // estimated score
        })

        test('Kureuil', async () => {

            const file = Path.fromMouli('res/images/kureuil.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(84) // verified score
        })

        test('Pain au chocolat', async () => {

            const file = Path.fromMouli('res/images/pain-au-chocolat.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(70) // estimated score, < 72
        })

        test('Twilight', async () => {

            const file = Path.fromMouli('res/images/twilight.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(74) // verified score
        })

        test('Animal crossing', async () => {

            const file = Path.fromMouli('res/images/animal-crossing.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(70) // estimated score
        })

        test('Jenkins', async () => {

            const file = Path.fromMouli('res/images/jenkins.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(70) // estimated score
        })

        test('Nuit étoilée', async () => {

            const file = Path.fromMouli('res/images/nuit-etoilee.ppm')

            const exec1 = new Executable('antman', [
                file, '3'
            ])

            exec1.setTimeout(10000)
            await exec1.execute()

            expect(exec1).toExitWith(0)

            const minified = Path.fromAbsolute(exec1.serialize().stdio.stdout)

            const exec2 = new Executable('giantman', [
                minified, '3'
            ])

            exec2.setTimeout(10000)
            await exec2.execute()

            await expect(exec2).concurrent.toOutput(file)
            expect(exec2).toExitWith(0)

            const observer = new Observer(file, minified)

            observer.checkScoreIsAbove(70) // estimated score, < 72
        })

    })

})
