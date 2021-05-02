import { Alert as AlertLab, AlertTitle } from "@material-ui/lab";

import Store from "../store";
import { useEffect } from "react";
import { useStoreState } from "pullstate";

const Alert = () => {
  const { alert } = useStoreState(Store);

  const onClose = () => {
    Store.update(s => {
      s.alert = null;
    });
  }

  useEffect(() => {
    return () => {
      onClose();
    }
  }, [])

  if (!alert) {
    return <></>
  }

  return (
    <AlertLab severity={alert.type} onClose={onClose}>
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.message}
    </AlertLab>
  );
};

export default Alert;
