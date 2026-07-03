import { createContext } from "react";
import resume from './resume.json';
import type { ResumeType } from "./ResumeType";

export const ResumeContext = createContext<ResumeType>(resume);
