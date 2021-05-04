import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {ImagesListConsumer, ImagesListProvider} from './context';
import LoadingContainer from '../../components/loading-container';
import ImageDetails from '../../components/image-details';
import LoadingAlert from '../../components/loading-alert';
import './styles.css';

function ImagesPage() {
    const [currentPage, setCurrentPage] = React.useState(0);

    return (
        <ImagesListProvider page={currentPage}>
            <ImagesListConsumer render={(value) => (
                <LoadingContainer
                    className='pt-5'
                    loading={value.loading}
                >

                    {() => {
                        if (value.error) {
                            return (
                                <LoadingAlert
                                    message='Could not load the image list :('
                                    onReload={value.reload}
                                    error={value.error}
                                />
                            );
                        }

                        return (
                            <Container>
                                <Row>
                                    {value.data.map((image, index) => (
                                        <Col
                                            key={`${image.id}-${index}`}
                                            className='mb-4'
                                            sm={12}
                                            md={6}
                                            lg={4}
                                        >
                                            <ImageDetails image={image}/>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        );
                    }}
                </LoadingContainer>
            )}/>
        </ImagesListProvider>
    );
}

export default ImagesPage;
