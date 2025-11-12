import { useTranslation } from "react-i18next";

const PracticeInputArea = ({ capturedShortcuts, pressedKeys, feedback }) => {
  const { t } = useTranslation();

  const getBackgroundColor = () => {
    if (feedback) {
      return feedback.isCorrect ? "#d2d1d1ff" : "#f8d7da";
    }
    return "#d2d1d1ff";
  };

  const renderShortcut = (shortcut, idx) => {
    const keys = shortcut.split("+");
    return (
      <span key={idx} className="d-flex align-items-center gap-1">
        {keys.map((key, keyIdx) => (
          <span key={keyIdx} className="d-flex align-items-center">
            <kbd className="fs-5 px-2 py-1">{key}</kbd>
            {keyIdx < keys.length - 1 && <span className="fs-5 mx-1 text-dark">+</span>}
          </span>
        ))}
        {idx < capturedShortcuts.length - 1 && (
          <span className="text-dark mx-2 fs-5">→</span>
        )}
      </span>
    );
  };

  const renderPressedKeys = () => (
    <div className="text-black d-flex gap-2 justify-content-center align-items-center flex-wrap">
      {capturedShortcuts.length > 0 && (
        <span className="text-black mx-2">→</span>
      )}
      {pressedKeys.map((key, index) => (
        <span key={index}>
          <kbd className="fs-4 px-3 py-2">{key}</kbd>
          {index < pressedKeys.length - 1 && (
            <span className="fs-4 mx-1">+</span>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="practice-input-area mb-3 p-4 border rounded text-center"
      style={{
        minHeight: "120px",
        backgroundColor: getBackgroundColor(),
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      tabIndex={0}
    >
      <small className="text-black d-block mb-2">
        {t("practice.pressKeys") || "Press the keyboard shortcut(s)"}
      </small>

      {/* Show captured shortcuts */}
      {capturedShortcuts.length > 0 && (
        <div className="text-black  mb-2 d-flex gap-2 justify-content-center align-items-center flex-wrap">
          {capturedShortcuts.map(renderShortcut)}
        </div>
      )}

      {/* Show currently pressed keys */}
      {pressedKeys.length > 0 ? (
        renderPressedKeys()
      ) : capturedShortcuts.length === 0 ? (
        <div className="text-black fst-italic">
          {t("practice.waiting") || "Waiting for input..."}
        </div>
      ) : null}
    </div>
  );
};

export default PracticeInputArea;
