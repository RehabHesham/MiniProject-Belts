export default (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Internal server error';
  let errors = err.errors || undefined;
  console.log(err);

  if (err.name === 'ValidationError') {
    // mongoose validation error
    // mongoose validation error
    /**
   ValidationError: User validation failed: email: email is required, password: password should be at least 8 char
   {
      errors: {
        email: ValidatorError: email is required
        {
          properties: [Object],
          kind: 'required',
          path: 'email',
          value: undefined,
          reason: undefined,
          [Symbol(mongoose#validatorError)]: true
        },
        password: ValidatorError: password should be at least 8 char
        {
          properties: [Object],
          kind: 'minlength',
          path: 'password',
          value: '1234563',
          reason: undefined,
          [Symbol(mongoose#validatorError)]: true
        }
      },
      _message: 'User validation failed'
    }
   */
    status = 400;

    errors = Object.values(err.errors).map((element) => ({
      field: element.path,
      message: element.message,
      worngValue: element.value,
    }));

    message = 'User validation failed';
  } else if (err.code === 11000) {
    /*
    MongoServerError: E11000 duplicate key error collection: BlogSystem.users index: email_1 dup key: { email: "ali@gmail.com" }
    {
      errorLabelSet: Set(0) {},
      errorResponse: {
        index: 0,
        code: 11000,
        errmsg: 'E11000 duplicate key error collection: BlogSystem.users index: email_1 dup key: { email: "ali@gmail.com" }',
        keyPattern: { email: 1 },
        keyValue: { email: 'ali@gmail.com' }
      },
      index: 0,
      code: 11000,
      keyPattern: { email: 1 },
      keyValue: { email: 'ali@gmail.com' }
    }
    */
    status = 400;

    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    message = `${field} value (${value}) already exist`;
  }
  return res.status(status).json({
    message: message,
    ...(errors && { errors }),
  });
};
/*
true && true => true
true && false => false
false && true => false

&& return last true value or first false value

1 && 2 => 2
undefined && 3 => undefined

...undefined  => undefined
...{[errors]} => [errors]
*/
