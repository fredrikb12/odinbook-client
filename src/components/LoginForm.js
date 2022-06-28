function LoginForm({ handleChange, handleSubmit, handleGuestLogin, formData }) {
  return (
    <form style={{ color: "white", display: "flex", flexDirection: "column" }}>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
      </label>
      <label>
        Confirm password:
        <input
          type="password"
          value={formData.password_confirm}
          onChange={handleChange}
          name="password_confirm"
        />
      </label>
      <button onClick={handleSubmit} style={{ maxWidth: "150px" }}>
        Sign In
      </button>
      
    </form>
  );
}
export default LoginForm;
