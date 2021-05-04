import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardText} from 'reactstrap';
import ImagePreview from '../image-preview';
import {Styles} from '../../utils';
import {ImageAPI} from '../../consts';
import './style.css';

function ImageDetails(props) {
    const {className, image} = props;

    return (
        <Card className={Styles.combineStyles('ImageDetails', className)}>
            <ImagePreview
                source={ImageAPI.GET_IMAGE(image.id)}
                details={image}
            />

            <CardBody>
                <CardText className={Styles.combineStyles('ImageDetails-Author', 'text-center')}>
                    {image.author || 'Author not known'}
                </CardText>
            </CardBody>
        </Card>
    );
}

ImageDetails.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        url: PropTypes.string,
        download_url: PropTypes.string,
    }).isRequired,
};

export default ImageDetails;
