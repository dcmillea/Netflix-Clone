import { useEffect, useState } from "react";
import { Movie } from "../../../typings";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";

function useList(uid: string | undefined) {
  const [list, setList] = useState<Movie[] | DocumentData[]>([]);

  useEffect(() => {
    if (!uid) return;

    // return onSnapshot(collection(db, "customers"));
  });

  return list;
}

export default useList;
