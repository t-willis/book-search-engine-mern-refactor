// import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

// import { getMe, deleteBook } from '../utils/API';

const SavedBooks = () => {
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);
  const token = Auth.loggedIn() ? Auth.getToken() : null; 
  
  const userData = useQuery(GET_ME, {
    variables: { username: Auth.getProfile(token).data.username },
  });

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
      try {
        const response = await removeBook({
          variables: { bookId },
          token: token
        });
        console.log('response: ', response);
        
      
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.log('token: ', token);
      console.log('bookId attempted to delete: ', bookId);
      console.error('line 93 error: ', err);
    }
  };

  // if data isn't here yet, say so
  if (userData.loading === true) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.data.me.savedBooks.length
            ? `Viewing ${userData.data.me.savedBooks.length} saved ${userData.data.me.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.data.me.savedBooks.map((book) => {
            return (
              <Col key={book.bookId} md="4">
                <Card border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </>
  );
};

export default SavedBooks;
