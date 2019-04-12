import Home from './index'

it('is functional', () => {
  expect(Home.functional).toBeTrue()
})

it('renders correctly', () => {
  const { queryByTestId } = render(Home)

  expect(queryByTestId('container')).toBeInTheDocument()
  expect(queryByTestId('container')).toHaveTextContent('Hups')
})
