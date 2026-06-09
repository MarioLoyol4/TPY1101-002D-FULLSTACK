import React, { useEffect, useState } from 'react';
import '../styles/Users.css';

const Users = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch('http://localhost:9090/api/usuarios');
        if (!res.ok) throw new Error('Error al obtener usuarios');
        const data = await res.json();
        setUsers(data || []);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la lista de usuarios.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-wrapper">
      <div className="users-header">
        <h2>Usuarios</h2>
        <button className="logout-button" onClick={onLogout}>Cerrar sesión</button>
      </div>

      {loading && <p>Cargando usuarios...</p>}
      {error && <p className="users-error">{error}</p>}

      {!loading && !error && (
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan="4">No hay usuarios registrados.</td>
              </tr>
            )}
            {users.map((u) => (
              <tr key={u.id || u._id || u.usuario}>
                <td>{u.id || u._id || '-'}</td>
                <td>{u.usuario || u.username || '-'}</td>
                <td>{u.nombre || u.name || '-'}</td>
                <td>{u.email || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
