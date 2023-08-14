

export default function Smallbutton({insideText, buttonType, onClick,disbled}) {
  return (
    <div>
      <button onClick={onClick} className={buttonType} disabled={disbled}> {insideText} </button>
    </div>
  );
}
