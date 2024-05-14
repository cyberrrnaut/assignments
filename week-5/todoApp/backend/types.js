const z = require("zod");

const todoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const idSchema = z.object({
  id: z.string(),
});

function isValidType1(todo) {
  const todoValidation = todoSchema.safeParse(todo);

  if (todoValidation.success) {
    return true;
  }

  return false;
}

function isValidType2(id) {
  const idValidation = idSchema.safeParse(id);

  if (idValidation.success) {
    return true;
  }

  return false;
}

module.exports = {
  isValidType1,
  isValidType2,
};
