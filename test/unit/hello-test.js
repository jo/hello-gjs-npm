import { test } from 'tap'
import hello from '../../src/hello'

test('hello', function (g) {
  g.test('should output "Hello NPM"', function (t) {
    t.is(hello(), 'Hello NPM')
    t.end()
  })
  g.end()
})
