const Profile = ({ user }) => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Nombre de usuario: <strong>{user.username}</strong></p>
    </div>
  );
};

export default Profile;
