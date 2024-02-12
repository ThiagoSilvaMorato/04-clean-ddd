import { AnswerQuestionUseCase } from "./answer-question";
import { Answer } from "../../../entities/answer";
import { QuestionsRepository } from "../repositories/questions-repository";
import { Question } from "../../enterprise/entities/question";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {
    return;
  },
};

test("create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova Pergunta",
    content: "Conteúdo da pergunta",
  });

  expect(question.id).toBeTruthy();
});
