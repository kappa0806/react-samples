import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("rendaring");
  return (
    <>
      {open ? (
        <div style={style}>
          {" "}
          <p>ChildArea</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
