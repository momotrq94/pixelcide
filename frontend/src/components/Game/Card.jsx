import '../../styles/Card.scss';

const Card = (props) => {
  const { image, id, card_name } = props;
  return <img src={image} alt={card_name} />;
};

export default Card;
