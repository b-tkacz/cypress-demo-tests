describe('API Testing', () => {
  it('should retrieve a list of posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
      }
    );
  });
});
