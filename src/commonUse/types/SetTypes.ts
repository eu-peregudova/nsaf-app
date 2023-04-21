import {iArticle} from "./iArticle";

type SetArticle = (value: (((prevState: iArticle[]) => iArticle[]) | iArticle[])) => void
type SetInput = (value: (((prevState: string) => string) | string)) => void
type SetPage = (value: (((prevState: number) => number) | number)) => void
type SetSource = (value: (((prevState: string) => string) | string)) => void
type SetLoader = (value: (((prevState: boolean) => boolean) | boolean)) => void

export type {SetArticle, SetInput, SetPage, SetSource, SetLoader}
