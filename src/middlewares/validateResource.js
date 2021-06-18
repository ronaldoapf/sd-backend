const validateResource = (validationSchema) => async (req, res, next) => {
  const resource = req.body;

  try {
    await validationSchema.validate(resource);
    next();
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.errors.join(' ') });
  }
};

export default validateResource;
