

export default function Smallbutton({insideText, buttonType, onClick,hidden,disabled}) {
  return (
    <div>
      <button onClick={onClick} className={buttonType} disabled={disabled} hidden={hidden}  > {insideText}  </button>
    </div>
  );
}
