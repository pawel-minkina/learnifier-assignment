import React from 'react';
import {Col, Container, Input, Label, Row} from 'reactstrap';
import {ImagesListConsumer, ImagesListProvider} from './context';
import LoadingContainer from '../../components/loading-container';
import ImageDetails from '../../components/image-details';
import LoadingAlert from '../../components/loading-alert';
import './styles.css';
import Button from 'reactstrap/es/Button';

const LIST_VALUE_TO_DATA_SOURCE_BY_SORT = {
    'ID': (value) => value.getData(),
    'Author': (value) => value.getSortedData('author'),
};

function ImagesPage() {
    const [currentPage, setCurrentPage] = React.useState(0);

    const [sort, setSort] = React.useState('ID');

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
                                <Row className='mb-5'>
                                    <Col
                                        className='text-left'
                                        md={3}
                                    >
                                        <Label>
                                            Sort by:
                                        </Label>
                                        <Input
                                            id="sort"
                                            type="select"
                                            value={sort}
                                            onChange={(event) => {
                                                setSort(event.target.value);
                                            }}
                                        >
                                            {Object.keys(LIST_VALUE_TO_DATA_SOURCE_BY_SORT)
                                                .map((sortType) => (
                                                    <option key={sortType}>{sortType}</option>
                                                ))}
                                        </Input>
                                    </Col>
                                </Row>

                                <Row>
                                    {LIST_VALUE_TO_DATA_SOURCE_BY_SORT[sort](value).map((image, index) => (
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

                                <Row className='mt-5 mb-5'>
                                    <Col>
                                        <Button
                                            color='primary'
                                            disabled={!value.hasPreviousPage()}
                                            onClick={() => setCurrentPage((oldCurrentPage) => Math.max(0, oldCurrentPage - 1))}
                                        >
                                            Previous page
                                        </Button>
                                    </Col>

                                    <Col className='align-items-center justify-content-center d-flex'>
                                        <span>{currentPage + 1}</span>
                                    </Col>

                                    <Col>
                                        <Button
                                            color='primary'
                                            disabled={!value.hasNextPage()}
                                            onClick={() => setCurrentPage((oldCurrentPage) => oldCurrentPage + 1)}
                                        >
                                            Next page
                                        </Button>
                                    </Col>
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
