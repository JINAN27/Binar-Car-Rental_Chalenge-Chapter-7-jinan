import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
const SearchNotFound = () => {
    return (
        <>
            <Container fluid="md" className=" d-flex flex-column align-items-center justify-content-center">
                <Image src="images/404_image.png" alt="404 Not Found Image" />
                <h1>Halaman Yang Anda Cari Tidak Ada!!!</h1>
                <p>Kami tidak dapat menemukan halaman yang anda maksud, coba dengan kata kunci lain!!!</p>
            </Container>
        </>
    );
};

export default SearchNotFound;
