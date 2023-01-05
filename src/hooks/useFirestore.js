import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { db } from "../Firebase/config";

export const useFirestore = (collect, condition) => {
  const [document, setDocument] = React.useState([]);
  console.log({ collect, condition });
  React.useEffect(() => {
    let isSubscribed = true;

    const queryFunction = async () => {
      const queryData = await query(
        collection(db, collect),
        where(condition.field, condition.operator, condition.compareValue),
        orderBy("createdAt")
      );
      onSnapshot(queryData, (docsSnap) => {
        if (isSubscribed) {
          setDocument(
            docsSnap.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        }
      });
      return () => (isSubscribed = false);
    };
    queryFunction();
  }, [collect, condition]);
  return document;
};
