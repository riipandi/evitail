import React from 'react'
import { describe, expect, it } from 'vitest'
import { render /*, screen, userEvent*/ } from './testHelper'
import App from '../src/renderer/src/app'

describe('simple unit test', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toBeTruthy()
  })

  // it('the title is visible', () => {
  //   render(<App />)
  //   expect(screen.getByText(/Vite React/i)).toBeInTheDocument()
  // })

  // it('should increment count on click', async () => {
  //   render(<App />)
  //   userEvent.click(screen.getByRole('button'))
  //   expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument()
  // })

  // it('is footer exists', async () => {
  //   render(<App />)
  //   const element = screen.getByRole('footer')
  //   expect(element.className).contain('max-w-7xl')
  //   expect(getComputedStyle(element).display).toEqual('block')
  // })
})
