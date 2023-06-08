function validateRegister(req, res, next) {
  const body = req.body;

  if (body.username < 1) {
    return res.json({
      message: "ต้องมากกว่า 1 ตัว",
    });
  }

  if (body.password < 5) {
    return res.json({
      message: "ต้องมากกว่า 5 ตัว",
    });
  }

  next();
}

export default validateRegister;
