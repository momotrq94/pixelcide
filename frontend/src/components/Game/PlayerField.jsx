import Card from "./Card";

const PlayerField = (props) => {
  const {
    playerField,
    moveCardTo,
    status,
    bossSuit,
    jesterActive,
    playerTurn,
  } = props;

  const onClick = (card) => {
    if (playerTurn) {
      moveCardTo(card, "Hand");
    }
  };

  const playerFieldList = playerField.map((card) => (
    <div
      layout
      transition={{ ease: "easeIn", duration: 0.4, opacity: 0 }}
      onClick={() => onClick(card)}
      key={card.id}
      className="player-field-card nes-pointer"
    >
      <Card
        image={card.image_front}
        warning={
          card.suit === bossSuit && !jesterActive && status !== "boss_attack"
            ? "warning"
            : ""
        }
      />
    </div>
  ));

  return <div className="player-field">{playerFieldList}</div>;
};

export default PlayerField;
