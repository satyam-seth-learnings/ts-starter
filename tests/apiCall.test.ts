import { expect } from 'chai';
// import fetchMock from 'fetch-mock';
import { describe, it } from 'mocha';
import nock from 'nock';

const mockResponse = {
  userId: 1,
  id: 1,
  title: 'test title',
  body: 'test body',
};

describe('Test api call', () => {
  //   it.only('Should be return data', async () => {
  //     const scope = nock('https://jsonplaceholder.typicode.com')
  //       .get('/posts/1')
  //       .reply(400, mockResponse);

  //     const data = await fetchPostData(1);
  //     console.log(data);
  //     expect(data).to.equal(mockResponse);
  //   });

  it('should return a user', async () => {
    nock('https://randomuser.me')
      .get('/api/')
      .reply(200, {
        results: [{ name: 'Dominic' }],
      });

    // fetchMock.get('http://example.com', {status: 200, body: { name: 'Dominic' }});

    const response = await fetch('https://randomuser.me/api/');

    const data = await response.json();

    console.log(data);
    expect(data).to.equal({ name: 'Dominic' });
  });
});
