/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'
import Observer from './objects/Observer'

suite('Easy Threshold', () => {

    suite('Songs', () => {

        test('Meat Loaf - If I Can\'t Have You', async () => {

            const file = Path.fromMouli('res/songs/if-i-cant-have-you.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Rick Astley - Never Gonna Give You Up', async () => {

            const file = Path.fromMouli('res/songs/never-gonna-give-you-up.lyr')

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

            observer.checkScoreIsAbove(2) // estimated score
        })

        test('Eminem - Rap God', async () => {

            const file = Path.fromMouli('res/songs/rap-god.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Rihanna - Work', async () => {

            const file = Path.fromMouli('res/songs/work.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Harry Belafonte - Jump in the Line', async () => {

            const file = Path.fromMouli('res/songs/jump-in-the-line.lyr')

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

            observer.checkScoreIsAbove(2) // estimated score
        })

        test('Bug Hunter - Disco! in the Panic Room', async () => {

            const file = Path.fromMouli('res/songs/disco-in-the-panic-room.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Baio - Sister of Pearl', async () => {

            const file = Path.fromMouli('res/songs/sister-of-pearl.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Shirley Ellis - The New Game', async () => {

            const file = Path.fromMouli('res/songs/the-new-game.lyr')

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

            observer.checkScoreIsAbove(2) // verified score
        })

        test('Lyre Le Temps - Rob the Banker', async () => {

            const file = Path.fromMouli('res/songs/rob-the-banker.lyr')

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

            observer.checkScoreIsAbove(2) // estimated score
        })

        test('System of a Down - Chop Suey!', async () => {

            const file = Path.fromMouli('res/songs/chop-suey.lyr')

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

            observer.checkScoreIsAbove(2) // estimated score
        })

    })

})
