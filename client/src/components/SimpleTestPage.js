import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleTestFormController = ({ children }) => {
  const initialValues = {};

  const onSubmit = values => {
    console.log("onSubmit");
    console.log(values);
  };

  const validate = values => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }
    return errors;
  };

  return children({
    initialValues,
    validate,
    onSubmit
  });
};

const SimpleFormFields = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{" "}
            Other
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={pristine || submitting}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </>
  );
};

export const SimpleTestForm = reduxForm({
  form: "SIMPLE_FORM"
})(({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <SimpleFormFields
      handleSubmit={handleSubmit}
      pristine={pristine}
      reset={reset}
      submitting={submitting}
    />
  );
});

export const SimpleTestPage = () => {
  return (
    <SimpleTestFormController>
      {props => <SimpleTestForm {...props} />}
    </SimpleTestFormController>
  );
};
