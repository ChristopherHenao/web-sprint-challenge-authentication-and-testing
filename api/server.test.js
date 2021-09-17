test('sanity', () => {
  expect(true).toBe(true)
})

describe('[Exercise 1] Register Endpoint', () => {
  test('[1] registers new user', () => {})
  test('[2] returns correct error if username already exists', () => {})
  test('[3] returns correct error if inputs are missing', () => {})
})

describe('[Exercise 2] Login Endpoint', () => {
  test('[3] logs user in', () => {})
  test('[4] returns correct error if user is not found', () => {})
})

describe('[Exercise 3] Get Jokes Endpoint', () => {
  test('[5] correctly gets all the jokes', () => {})
  test('[6] restricts access to authorized users only', () => {})
  test('[7] returns correct message if user is not authorized', () => {})
})