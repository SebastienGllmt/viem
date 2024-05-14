import { expect, test } from 'vitest'

import { getGeneralPaymasterInput } from './getGeneralPaymasterInput.js'

test('args: innerInput field as hex', () => {
  expect(
    getGeneralPaymasterInput({
      innerInput: '0x',
    }),
  ).toEqual(
    '0x8c5a344500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000',
  )

  expect(
    getGeneralPaymasterInput({
      innerInput: '0x000102030405',
    }),
  ).toEqual(
    '0x8c5a3445000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000060001020304050000000000000000000000000000000000000000000000000000',
  )
})

test('args: innerInput field as byte array', () => {
  expect(
    getGeneralPaymasterInput({
      innerInput: new Uint8Array(),
    }),
  ).toEqual(
    '0x8c5a344500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000',
  )

  expect(
    getGeneralPaymasterInput({
      innerInput: new Uint8Array([0, 1, 2, 3, 4, 5]),
    }),
  ).toEqual(
    '0x8c5a3445000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000060001020304050000000000000000000000000000000000000000000000000000',
  )
})