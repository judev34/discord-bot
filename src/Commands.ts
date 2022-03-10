import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { RandomNumber } from "./commands/RandomNumber";
import { RandomSentence } from "./commands/RandomSentence";

export const Commands: Command[] = [Hello, RandomNumber, RandomSentence];
