import Soundboard from './Soundboard';

describe('soundboard', () => {
  it('renders the component with correct attributes', () => {
    cy.mount(<Soundboard />)
    cy.get('img[src="flamboyant.png"]').should('have.attr', 'height', '500');
  })
})