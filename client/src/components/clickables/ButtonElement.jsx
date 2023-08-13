

export default function Smallbutton({insideText, buttonType, onClick,disbles}) {
  return (
    <div>
      <button onClick={onClick} className={buttonType} disabled={disbles}> {insideText} </button>
    </div>
  );
}
