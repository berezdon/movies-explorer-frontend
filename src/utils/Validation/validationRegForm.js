class Valid {
  constructor(options) {
    this.options = options;
  }

  name(name) {
    if (name.length > 1 && name.length < 31) return true
  }

  email(email) {
    return this.options.regExpEmail.test(email);
  }

  password(password) {
    return password.length > 7
  }
}


const validationSearchForm = new Valid({
  regExpEmail: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
});

export default validationSearchForm
