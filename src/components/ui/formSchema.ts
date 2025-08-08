import {
  object,
  string,
  minLength,
  custom,
  boolean,
  pipe,
  InferInput,
} from "valibot";

export const formSchema = object({
  name: pipe(string(), minLength(2, "Имя слишком короткое")),
  phone: pipe(
    string(),
    custom((val) => {
      if (typeof val !== "string") return false;
      const digitsCount = (val.match(/\d/g) || []).length;
      if (digitsCount < 9) return false;
      return /^[\d\s()+-]+$/.test(val);
    }, "Введите корректный телефон с минимум 9 цифрами. Допустимые символы: +, -, (, ), пробелы")
  ),
  message: string(),
  isAgreed: pipe(
    boolean(),
    custom((val) => val === true, "Необходимо согласие")
  ),
});

export type FormSchema = InferInput<typeof formSchema>;
