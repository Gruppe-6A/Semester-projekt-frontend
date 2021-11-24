function LogoutBtn({ logout }) {
  return (
    <div>
      <button type="button" className="btn btn-danger mb-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
