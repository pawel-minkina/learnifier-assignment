import React from 'react';
import {Col, Container, Input, Label, Row} from 'reactstrap';
import {ImagesListConsumer, ImagesListProvider} from './context';
import LoadingContainer from '../../components/loading-container';
import ImageDetails from '../../components/image-details';
import LoadingAlert from '../../components/loading-alert';
import './styles.css';

const LIST_VALUE_TO_DATA_SOURCE_BY_SORT = {
    'ID': (value) => value.data,
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

                            </Container>
                        );
                    }}
                </LoadingContainer>
            )}/>
        </ImagesListProvider>
    );
}

export default ImagesPage;
