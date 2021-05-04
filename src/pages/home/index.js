import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Button} from 'reactstrap';
import Col from 'reactstrap/es/Col';
import {v4 as uuid} from 'uuid';
import ImagePreview from '../../components/image-preview';
import {ImageAPI} from '../../consts';
import {Styles} from '../../utils';
import {NavLink} from 'react-router-dom';

function HomePage(props) {
    const {count} = props;

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems([...Array(count)].map((key, index) => ({
            key: `${index}-${Date.now()}`,
            seed: uuid(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et velit at turpis hendrerit rutrum. Sed pellentesque nec leo non dictum. Vestibulum aliquam lorem quam, at volutpat nulla tincidunt at. Nulla quis ante mauris. Proin ornare purus in ipsum hendrerit, at faucibus neque aliquet. Pellentesque elit ante, suscipit ut luctus sed, sagittis id lacus. Curabitur scelerisque ultrices purus rutrum mattis. Vestibulum viverra scelerisque neque a egestas.',
        })));
    }, [count]);

    return (
        <Container className='pt-5'>
            {items.map((item, index) => {
                const textOrder = (index + 1) % 2;
                const textClass = textOrder ? 'text-md-left' : 'text-md-right';
                return (
                    <Row key={item.key} className='mb-5'>
                        <Col md={{size: 5, order: index % 2}}>
                            <ImagePreview source={ImageAPI.RANDOM_IMAGE(item.seed)}/>
                        </Col>

                        <Col
                            className='mt-sm-3 mt-md-0'
                            md={{size: 7, order: textOrder}}>
                            <p className={Styles.combineStyles('text-sm-center', textClass)}>{item.content}</p>
                        </Col>
                    </Row>
                );
            })}

            <Container
                className='mb-5'
                fluid={true}
            >
                <NavLink to="images">
                    <Button color="primary">
                        Show more
                    </Button>
                </NavLink>
            </Container>
        </Container>
    );
}

HomePage.propTypes = {
    count: PropTypes.number,
};

HomePage.defaultProps = {
    count: 5,
};

export default HomePage;
