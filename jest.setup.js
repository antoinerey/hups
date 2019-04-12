import { configure } from 'dom-testing-library'
import { fireEvent, render } from 'vue-testing-library'

// Replace the default `data-testid` attribute with our
// custom `data-test` one, because it's simpler.
configure({
  testIdAttribute: 'data-test',
})

// Make those methods global since they're used in pretty
// much every test associated to some Vue component.
global.fireEvent = fireEvent
global.render = render
