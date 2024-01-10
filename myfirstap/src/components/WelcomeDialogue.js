function WelcomeDialogue() {
  return (
    <>
      <Dialogue
        title="Welcome to React Course."
        content="This is the React Course."
      />
      <Dialogue
        title="Welcome to JS Course."
        content="This is the JS Course."
      />
    </>
  );
}

export default WelcomeDialogue;

function FancyBorder(props) {
  return <div>{props.children}</div>;
}

function Dialogue(props) {
  return (
    <FancyBorder>
      <h1 className="Dialogue-title">{props.title}</h1>
      <p>{props.content}</p>
    </FancyBorder>
  );
}
