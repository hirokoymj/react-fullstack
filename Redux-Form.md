# Redux Form

### formValueSelector

- `formValueSelector` allows any react components to access a redux form values.

```js
import { formValueSelector } from "redux-form"; // ES6

const selector = formValueSelector("myFormName");

connect(state => ({
  first: selector(state, "firstName"),
  last: selector(state, "lastName")
}))(MyFormComponent);
```

<hr />
[ 01/24/2020 ]

### References:

- [formValueSelector](https://redux-form.com/8.2.2/docs/api/formvalueselector.md/)
