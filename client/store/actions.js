export const ExampleActions = {
  EXAMPLE_ACTION: 'EXAMPLE_ACTION'
}

export const exampleAction = value => {
  return {
    type: ExampleActions.EXAMPLE_ACTION,
    payload: value
  }
}
