import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Text, View } from "react-native";
import { WordsListUrl } from "../constants/constants";

export type Word = {
  Term: string;
  Type: string;
  Definition: string;
  Purpose: string;
  Example: string;
  Effect: string;
};

export type WordList = {
  words: {
    [word_id: string]: Word;
  };
};

type WordListProviderData = {
  WordList: WordList;
};

const WordsListContext = createContext<WordListProviderData | null>(null);

interface props {
  children?: React.ReactNode;
}

export default function WorldListProvider(props: props) {
  const [data, setData] = useState<WordList | null>(null);

  useEffect(() => {
    // Fetch Word List
    fetch(WordsListUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!data) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <WordsListContext.Provider value={{ WordList: data }}>
        {props.children}
      </WordsListContext.Provider>
    );
  }
}

export function useWordList(): WordList {
  const ctx = useContext(WordsListContext);

  if (ctx?.WordList !== null && ctx?.WordList !== undefined) {
    return ctx?.WordList;
  } else {
    console.warn("useWordList must be used inside a WordListProvider");
    return { words: {} };
  }
}
