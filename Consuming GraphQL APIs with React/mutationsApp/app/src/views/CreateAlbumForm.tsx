import { FormEvent, useState } from 'react';
import { CREATE_ALBUM } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { Button, Form } from 'react-bootstrap';

const CreateAlbumForm = () => {
  const [album, setAlbum] = useState({
    title: '',
    userId: '',
  });
  const [createAlbum, { data, loading, error}] = useMutation(CREATE_ALBUM)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    createAlbum({
        variables: album
    })
    setAlbum({
        title: '',
        userId: ''
    })
  }

  if (loading) {
    return (
        <div>Loading...</div>
    )
  }

  if (error) {
    return (
        <div>Error, {error.message}</div>
    )
  }

  return (
    <>
    
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(event) =>
                setAlbum({ ...album, title: event.target.value })
            }
            value={album.title}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label>User ID:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter User ID"
            onChange={(event) =>
                setAlbum({ ...album, userId: event.target.value })
            }
            value={album.userId}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Create Album
        </Button>
        </Form>
        {data?.createAlbum && (
            <>
                <h2>Title: {data.createAlbum.title}</h2>
                <p>Username: {data.createAlbum.user.name}</p>
                <p>User Id: {data.createAlbum.user.id}</p>   
            </>
        )}
    </>
  );
};
export default CreateAlbumForm;
