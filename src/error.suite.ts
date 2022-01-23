/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Error handling', () => {

    suite('Invalid input', () => {

        test('Folder', async () => {

            const file = Path.fromMouli('.')

            const exec1 = new Executable('antman', [
                file, '1'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(84)

            const exec2 = new Executable('giantman', [
                file, '1'
            ])
            await exec2.execute()

            expect(exec2).toExitWith(84)
        })

        test('One argument', async () => {

            const file = Path.fromMouli('res/songs/if-i-cant-have-you.lyr')

            const exec1 = new Executable('antman', [
                file
            ])
            await exec1.execute()

            expect(exec1).toExitWith(84)

            const exec2 = new Executable('giantman', [
                file
            ])
            await exec2.execute()

            expect(exec2).toExitWith(84)
        })

        test('Bad path', async () => {

            const file = Path.fromMouli('res/doesnotexist')

            const exec1 = new Executable('antman', [
                file, '1'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(84)

            const exec2 = new Executable('giantman', [
                file, '1'
            ])
            await exec2.execute()

            expect(exec2).toExitWith(84)
        })

        test('Invalid file type', async () => {

            const file = Path.fromMouli('res/songs/if-i-cant-have-you.lyr')

            const exec1 = new Executable('antman', [
                file, '42'
            ])
            await exec1.execute()

            expect(exec1).toExitWith(84)

            const exec2 = new Executable('giantman', [
                file, '42'
            ])
            await exec2.execute()

            expect(exec2).toExitWith(84)
        })

        test('No argument', async () => {

            const exec1 = new Executable('antman', [])
            await exec1.execute()

            expect(exec1).toExitWith(84)

            const exec2 = new Executable('giantman', [])
            await exec2.execute()

            expect(exec2).toExitWith(84)
        })

    })

    suite('All characters can be handled', () => {

        test('Song option', async () => {

            const file = Path.fromMouli('res/allChars')

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
        })

        test('HTML option', async () => {

            const file = Path.fromMouli('res/allChars')

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
        })

        test('Image option', async () => {

            const file = Path.fromMouli('res/allChars')

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
        })

    })

})
