import Post from './Post';

describe('post', () => {
  const mockPost = {
    'title': 'Test post',
    'content': 'Test contents'
  }

  it('displays a post with title and content', () => {
    cy.mount(<Post post={mockPost} />)
    cy.contains('Test post')
    cy.contains('Test contents')
  })
})